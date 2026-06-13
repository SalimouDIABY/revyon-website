// Fonction serverless Vercel — formulaire de contact Revyon Tech
// Reçoit une soumission, valide, et envoie 2 emails via Zoho SMTP.
import nodemailer from 'nodemailer';
import validator from 'validator';

const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'contact@revyontech.com';
const SMTP_HOST = process.env.SMTP_HOST || 'smtp.zoho.com';
const SMTP_PORT = Number(process.env.SMTP_PORT || 587);
const SMTP_SECURE = process.env.SMTP_SECURE === 'true' || SMTP_PORT === 465;
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const SMTP_FROM = process.env.SMTP_FROM || `Revyon Tech <${SMTP_USER || 'no-reply@revyontech.com'}>`;
const USE_EMAIL = Boolean(SMTP_HOST && SMTP_USER && SMTP_PASS);

// Origines autorisées (CORS) — par défaut le domaine de production
const ALLOWED_ORIGINS = (process.env.CORS_ORIGIN || 'https://www.revyontech.com,https://revyontech.com')
  .split(',')
  .map((o) => o.trim())
  .filter(Boolean);

// Limitation de débit « best-effort » par IP, dans la mémoire de l'instance chaude.
// (Suffisant contre le spam basique ; le honeypot + Vercel couvrent le reste.)
const RATE = { windowMs: 15 * 60 * 1000, max: 5 };
const hits = new Map();
function rateLimited(ip) {
  const now = Date.now();
  const entry = hits.get(ip) || { count: 0, reset: now + RATE.windowMs };
  if (now > entry.reset) {
    entry.count = 0;
    entry.reset = now + RATE.windowMs;
  }
  entry.count += 1;
  hits.set(ip, entry);
  return entry.count > RATE.max;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export default async function handler(req, res) {
  const origin = req.headers.origin;
  if (origin && ALLOWED_ORIGINS.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Méthode non autorisée' });
  }

  const ip = (req.headers['x-forwarded-for'] || '').toString().split(',')[0].trim() || 'unknown';
  if (rateLimited(ip)) {
    return res.status(429).json({ success: false, errors: ['Trop de tentatives. Veuillez réessayer dans 15 minutes.'] });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
    const { name, email, phone, service, subject, message, honeypot } = body;

    // Anti-spam : honeypot
    if (honeypot && honeypot.length > 0) {
      return res.status(400).json({ success: false, errors: ['Formulaire invalide'] });
    }

    const errors = [];
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      errors.push('Le nom est obligatoire');
    } else if (name.trim().length > 100) {
      errors.push('Le nom ne doit pas dépasser 100 caractères');
    }
    if (!email || typeof email !== 'string' || !validator.isEmail(email)) {
      errors.push("L'email est invalide");
    }
    if (!phone || typeof phone !== 'string') {
      errors.push('Le numéro de téléphone est invalide');
    } else {
      const phoneClean = phone.replace(/[\s\-.()]/g, '');
      if (!/^(\+|00)?[0-9]{8,15}$/.test(phoneClean)) {
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

    if (!USE_EMAIL) {
      console.error('SMTP non configuré : variables SMTP_* manquantes côté Vercel.');
      return res.status(500).json({
        success: false,
        message: 'Service email non configuré. Contactez-nous via WhatsApp : +224 627330709.',
      });
    }

    const contact = {
      name: name.trim(),
      email: validator.normalizeEmail(email),
      phone: phone.trim(),
      service: service.trim(),
      subject: subject ? subject.trim() : '',
      message: message.trim(),
    };

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_SECURE,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    // Notification à l'admin (réponse directe au visiteur via replyTo)
    await transporter.sendMail({
      from: SMTP_FROM,
      to: CONTACT_EMAIL,
      replyTo: contact.email,
      subject: `Nouveau message de contact Revyon Tech — ${contact.name}`,
      text: `Nouveau message de contact.\n\nNom: ${contact.name}\nEmail: ${contact.email}\nTéléphone: ${contact.phone}\nService: ${contact.service}\nSujet: ${contact.subject}\n\nMessage:\n${contact.message}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom:</strong> ${escapeHtml(contact.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(contact.email)}</p>
        <p><strong>Téléphone:</strong> ${escapeHtml(contact.phone)}</p>
        <p><strong>Service:</strong> ${escapeHtml(contact.service)}</p>
        <p><strong>Sujet:</strong> ${escapeHtml(contact.subject) || '—'}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(contact.message).replace(/\n/g, '<br/>')}</p>
        <p>Envoyé depuis le formulaire de contact du site revyontech.com.</p>
      `,
    });

    // Confirmation au visiteur (best-effort — n'empêche pas le succès)
    try {
      await transporter.sendMail({
        from: SMTP_FROM,
        to: contact.email,
        subject: 'Confirmation de réception - Revyon Tech',
        text: `Bonjour ${contact.name},\n\nNous avons bien reçu votre message. Notre équipe vous répondra dans les 24 heures.\n\nCordialement,\nL'équipe Revyon Tech`,
        html: `
          <h2>Merci de votre message !</h2>
          <p>Bonjour ${escapeHtml(contact.name)},</p>
          <p>Nous avons bien reçu votre message. Notre équipe vous répondra dans les 24 heures par email.</p>
          <p>Si votre demande est urgente, contactez-nous via WhatsApp : +224 627330709</p>
          <br/>
          <p>Cordialement,<br/>L'équipe Revyon Tech</p>
          <p style="font-size:0.9em;color:#999;margin-top:20px;">Cet email a été généré automatiquement, merci de ne pas y répondre directement.</p>
        `,
      });
    } catch (confirmErr) {
      console.error('Erreur envoi confirmation utilisateur:', confirmErr);
    }

    return res.status(200).json({
      success: true,
      message: 'Votre message a été envoyé avec succès. Notre équipe vous recontactera dans les 24 heures.',
    });
  } catch (error) {
    console.error('Contact function error:', error);
    return res.status(500).json({
      success: false,
      message: 'Une erreur s\'est produite. Veuillez réessayer ou nous contacter via WhatsApp : +224 627330709.',
    });
  }
}
