import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import validator from 'validator';
import nodemailer from 'nodemailer';
import mysql from 'mysql2/promise';
import crypto from 'crypto';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import healthRoutes from './routes/health.js';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

const DB_HOST = process.env.DB_HOST || '127.0.0.1';
const DB_PORT = Number(process.env.DB_PORT || 3306);
const DB_USER = process.env.DB_USER || 'root';
const DB_PASSWORD = process.env.DB_PASSWORD || '';
const DB_NAME = process.env.DB_NAME || 'revyontech';
const ADMIN_API_KEY = process.env.ADMIN_API_KEY || '';
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'contact@revyontech.com';
const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = Number(process.env.SMTP_PORT || 587);
const SMTP_SECURE = process.env.SMTP_SECURE === 'true' || SMTP_PORT === 465;
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const SMTP_FROM = process.env.SMTP_FROM || `Revyon Tech <${SMTP_USER || 'no-reply@revyontech.com'}>`;
const USE_EMAIL = Boolean(SMTP_HOST && SMTP_USER && SMTP_PASS);

// In-memory storage for development (fallback when MySQL is not available)
let contacts = [];
let pool = null;
let useMySQL = false;

const transporter = nodemailer.createTransport({
  host: SMTP_HOST || 'localhost',
  port: SMTP_PORT,
  secure: SMTP_SECURE,
  auth: SMTP_USER && SMTP_PASS ? { user: SMTP_USER, pass: SMTP_PASS } : undefined,
});

// Escape user content only when injecting it into HTML emails —
// data is stored raw in the database
function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

async function initDb() {
  try {
    const adminConnection = await mysql.createConnection({
      host: DB_HOST,
      port: DB_PORT,
      user: DB_USER,
      password: DB_PASSWORD,
    });

    const safeDbName = DB_NAME.replace(/`/g, '');
    await adminConnection.query(`CREATE DATABASE IF NOT EXISTS \`${safeDbName}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;`);
    await adminConnection.end();

    pool = mysql.createPool({
      host: DB_HOST,
      port: DB_PORT,
      user: DB_USER,
      password: DB_PASSWORD,
      database: safeDbName,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });

    await pool.execute(`
      CREATE TABLE IF NOT EXISTS contacts (
        id BIGINT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(50) NOT NULL,
        service VARCHAR(100) NOT NULL,
        subject VARCHAR(255) DEFAULT '',
        message TEXT NOT NULL,
        status VARCHAR(50) NOT NULL DEFAULT 'new',
        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);
    useMySQL = true;
    console.log('✅ MySQL initialisé et table contacts prête.');
  } catch (error) {
    console.warn('⚠️ MySQL non disponible, passage en mode développement avec stockage en mémoire :', error.message);
    console.log('💡 Pour utiliser MySQL, installez et démarrez un serveur MySQL local.');
    useMySQL = false;
  }
}

function requireAdminAuth(req, res, next) {
  const authHeader = req.headers.authorization || '';
  const token = authHeader.replace(/^Bearer\s+/i, '');

  const expected = Buffer.from(ADMIN_API_KEY);
  const received = Buffer.from(token);
  const valid = ADMIN_API_KEY.length > 0
    && expected.length === received.length
    && crypto.timingSafeEqual(expected, received);

  if (!valid) {
    return res.status(401).json({ success: false, message: 'Accès administrateur refusé' });
  }

  next();
}

// Send notification email to admin
async function sendAdminNotification(contact) {
  if (!USE_EMAIL) {
    console.warn('⚠️ SMTP non configuré : email de notification admin non envoyé.');
    return;
  }

  const mailOptions = {
    from: SMTP_FROM,
    to: CONTACT_EMAIL,
    replyTo: contact.email,
    subject: `Nouveau message de contact Revyon Tech — ${contact.name}`,
    text: `Vous avez reçu un nouveau message de contact.\n\nNom: ${contact.name}\nEmail: ${contact.email}\nTéléphone: ${contact.phone}\nService: ${contact.service}\nSujet: ${contact.subject}\n\nMessage:\n${contact.message}`,
    html: `
      <h2>Nouveau message de contact</h2>
      <p><strong>Nom:</strong> ${escapeHtml(contact.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(contact.email)}</p>
      <p><strong>Téléphone:</strong> ${escapeHtml(contact.phone)}</p>
      <p><strong>Service:</strong> ${escapeHtml(contact.service)}</p>
      <p><strong>Sujet:</strong> ${escapeHtml(contact.subject) || '—'}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(contact.message).replace(/\n/g, '<br/>')}</p>
      <p>Envoyé depuis le formulaire de contact Revyon Tech.</p>
    `,
  };

  await transporter.sendMail(mailOptions);
}

// Send confirmation email to user
async function sendUserConfirmation(contact) {
  if (!USE_EMAIL) {
    console.warn('⚠️ SMTP non configuré : email de confirmation utilisateur non envoyé.');
    return;
  }

  const mailOptions = {
    from: SMTP_FROM,
    to: contact.email,
    subject: 'Confirmation de réception - Revyon Tech',
    text: `Bonjour ${contact.name},\n\nNous avons bien reçu votre message. Notre équipe l'examinera et vous répondra dans les 24 heures.\n\nCordialement,\nL'équipe Revyon Tech`,
    html: `
      <h2>Merci de votre message !</h2>
      <p>Bonjour ${escapeHtml(contact.name)},</p>
      <p>Nous avons bien reçu votre message et l'avons enregistré dans notre système.</p>
      <p>Notre équipe l'examinera et vous répondra dans les 24 heures par email.</p>
      <p>Si votre demande est urgente, n'hésitez pas à nous contacter via WhatsApp : +224 627330709</p>
      <br/>
      <p>Cordialement,<br/>L'équipe Revyon Tech</p>
      <p style="font-size: 0.9em; color: #999; margin-top: 20px;">Cet email a été généré automatiquement, merci de ne pas y répondre directement.</p>
    `,
  };

  await transporter.sendMail(mailOptions);
}

// ── Middleware ──
app.set('trust proxy', 1); // derrière le proxy Railway/Render/Vercel
app.use(helmet());

const allowedOrigins = (process.env.CORS_ORIGIN || 'http://localhost:5173,http://localhost:3000')
  .split(',')
  .map(o => o.trim())
  .filter(Boolean);

const corsOptions = {
  origin: (origin, callback) => {
    // Autorise les requêtes sans Origin (curl, monitoring, apps mobiles)
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error('Origine non autorisée par CORS'));
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

app.use(express.json({ limit: '50kb' }));
app.use(express.urlencoded({ extended: true, limit: '50kb' }));

// Rate limiting : 5 soumissions de formulaire / 15 min / IP,
// 20 tentatives admin / 15 min / IP
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, errors: ['Trop de tentatives. Veuillez réessayer dans 15 minutes.'] },
});
const adminLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: 'Trop de tentatives. Veuillez réessayer dans 15 minutes.' },
});

// Health check routes
app.use('/api', healthRoutes);

// Contact form submission endpoint
app.post('/api/contact', contactLimiter, async (req, res) => {
  try {
    const { name, email, phone, service, subject, message, honeypot } = req.body;

    // Honeypot check (anti-spam)
    if (honeypot && honeypot.length > 0) {
      console.warn('⚠️ Honeypot field rempli - possible bot');
      return res.status(400).json({ success: false, errors: ['Formulaire invalide'] });
    }

    // Validation
    const errors = [];

    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      errors.push('Le nom est obligatoire');
    } else if (name.trim().length > 100) {
      errors.push('Le nom ne doit pas dépasser 100 caractères');
    }

    if (!email || typeof email !== 'string' || !validator.isEmail(email)) {
      errors.push('L\'email est invalide');
    }

    // Numéros guinéens (+224 6XXXXXXXX) et internationaux (8 à 15 chiffres)
    if (!phone || typeof phone !== 'string') {
      errors.push('Le numéro de téléphone est invalide');
    } else {
      const phoneClean = phone.replace(/[\s\-\.\(\)]/g, '');
      const phoneRegex = /^(\+|00)?[0-9]{8,15}$/;
      if (!phoneRegex.test(phoneClean)) {
        errors.push('Le numéro de téléphone est invalide');
      }
    }

    if (!service || typeof service !== 'string' || service.trim().length === 0) {
      errors.push('Veuillez sélectionner un service');
    }

    if (subject && (typeof subject !== 'string' || subject.length > 200)) {
      errors.push('Le sujet ne doit pas dépasser 200 caractères');
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      errors.push('Le message doit contenir au moins 10 caractères');
    } else if (message.length > 5000) {
      errors.push('Le message ne doit pas dépasser 5000 caractères');
    }

    if (errors.length > 0) {
      return res.status(400).json({ success: false, errors });
    }

    // Les données sont stockées brutes ; l'échappement HTML se fait à
    // l'affichage (React) et dans les emails HTML (escapeHtml)
    const contact = {
      id: Date.now(),
      name: name.trim(),
      email: validator.normalizeEmail(email),
      phone: phone.trim(),
      service: service.trim(),
      subject: subject ? subject.trim() : '',
      message: message.trim(),
      createdAt: new Date().toISOString(),
      status: 'new',
    };

    if (useMySQL && pool) {
      await pool.execute(
        `INSERT INTO contacts (id, name, email, phone, service, subject, message, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [contact.id, contact.name, contact.email, contact.phone, contact.service, contact.subject, contact.message, contact.status]
      );
    } else {
      contacts.push(contact);
    }

    let emailSent = false;
    try {
      await sendAdminNotification(contact);
      emailSent = true;
      console.log('✅ Email de notification admin envoyé');
    } catch (emailError) {
      console.error('❌ Erreur d\'envoi d\'email admin :', emailError);
    }

    try {
      await sendUserConfirmation(contact);
      console.log('✅ Email de confirmation utilisateur envoyé');
    } catch (emailError) {
      console.error('❌ Erreur d\'envoi d\'email de confirmation :', emailError);
    }

    // Si ni la base ni l'email n'ont conservé le message, ne pas mentir au visiteur
    if (!useMySQL && !emailSent && USE_EMAIL) {
      return res.status(500).json({
        success: false,
        message: 'Votre message n\'a pas pu être transmis. Veuillez nous contacter via WhatsApp : +224 627330709.',
      });
    }

    console.log('New contact submission saved:', { id: contact.id, name: contact.name, service: contact.service });

    res.status(200).json({
      success: true,
      message: 'Votre message a été envoyé avec succès. Notre équipe vous recontactera dans les 24 heures.',
      id: contact.id,
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'Une erreur s\'est produite. Veuillez réessayer ultérieurement.',
    });
  }
});

// Admin endpoint to get all contacts
app.get('/api/admin/contacts', adminLimiter, requireAdminAuth, async (req, res) => {
  try {
    let contactsData = [];

    if (useMySQL && pool) {
      const [rows] = await pool.execute(
        'SELECT id, name, email, phone, service, subject, message, status, created_at FROM contacts ORDER BY created_at DESC'
      );
      contactsData = Array.isArray(rows) ? rows : [];
    } else {
      contactsData = contacts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    res.json({
      total: contactsData.length,
      contacts: contactsData,
    });
  } catch (error) {
    console.error('Admin contacts error:', error);
    res.status(500).json({ success: false, message: 'Impossible de récupérer les contacts.' });
  }
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

// Error handler
app.use((err, req, res, next) => {
  if (err && err.message === 'Origine non autorisée par CORS') {
    return res.status(403).json({ success: false, message: 'Origine non autorisée' });
  }
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Une erreur serveur s\'est produite',
  });
});

initDb().then(() => {
  app.listen(PORT, () => {
    console.log(`\n✅ Revyon Tech Backend Server running on http://localhost:${PORT}`);
    console.log(`📧 Contact endpoint: POST http://localhost:${PORT}/api/contact`);
    console.log(`🏥 Health check: GET http://localhost:${PORT}/api/health\n`);
  });
}).catch((error) => {
  console.error('Impossible de démarrer le serveur :', error);
});
