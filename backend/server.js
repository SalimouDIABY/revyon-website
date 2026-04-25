import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import validator from 'validator';
import nodemailer from 'nodemailer';
import mysql from 'mysql2/promise';
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
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'revyontech@gmail.com';
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

  if (!ADMIN_API_KEY || token !== ADMIN_API_KEY) {
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
    subject: `Nouveau message de contact Revyon Tech — ${contact.name}`,
    text: `Vous avez reçu un nouveau message de contact.\n\nNom: ${contact.name}\nEmail: ${contact.email}\nTéléphone: ${contact.phone}\nService: ${contact.service}\nSujet: ${contact.subject}\n\nMessage:\n${contact.message}`,
    html: `
      <h2>Nouveau message de contact</h2>
      <p><strong>Nom:</strong> ${contact.name}</p>
      <p><strong>Email:</strong> ${contact.email}</p>
      <p><strong>Téléphone:</strong> ${contact.phone}</p>
      <p><strong>Service:</strong> ${contact.service}</p>
      <p><strong>Sujet:</strong> ${contact.subject || '—'}</p>
      <p><strong>Message:</strong></p>
      <p>${contact.message.replace(/\n/g, '<br/>')}</p>
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
      <p>Bonjour ${contact.name},</p>
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

// Middleware
// Middleware
const allowedOrigins = (process.env.CORS_ORIGIN || 'http://localhost:5173')
  .split(',')
  .map(o => o.trim());

// Middleware
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.options('*', cors());

// Gérer les requêtes OPTIONS (preflight)
app.options('*', cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check routes
app.use('/api', healthRoutes);

// Contact form submission endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, service, subject, message, honeypot } = req.body;

    // Honeypot check (anti-spam)
    if (honeypot && honeypot.length > 0) {
      console.warn('⚠️ Honeypot field rempli - possible bot');
      return res.status(400).json({ success: false, errors: ['Formulaire invalide'] });
    }

    // Validation
    const errors = [];

    if (!name || name.trim().length === 0) {
      errors.push('Le nom est obligatoire');
    }
    if (!email || !validator.isEmail(email)) {
      errors.push('L\'email est invalide');
    }
    // Nouveau check pour les numéros de téléphone guinéens
    const phoneClean = phone.replace(/[\s\-\.]/g, '');
    const phoneRegex = /^(\+224|00224)?[6][0-9]{8}$/;
    if (!phone || !phoneRegex.test(phoneClean)) {
      errors.push('Le numéro de téléphone est invalide');
    }
    if (!service || service.trim().length === 0) {
      errors.push('Veuillez sélectionner un service');
    }
    if (!message || message.trim().length < 10) {
      errors.push('Le message doit contenir au moins 10 caractères');
    }

    if (errors.length > 0) {
      return res.status(400).json({ success: false, errors });
    }

    const contact = {
      id: Date.now(),
      name: validator.escape(name),
      email: validator.normalizeEmail(email),
      phone: validator.escape(phone),
      service: validator.escape(service),
      subject: subject ? validator.escape(subject) : '',
      message: validator.escape(message),
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

    try {
      await sendAdminNotification(contact);
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

    console.log('New contact submission saved:', contact);

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
app.get('/api/admin/contacts', requireAdminAuth, async (req, res) => {
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
