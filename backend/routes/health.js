// Routes de health check pour garder le service actif
import express from 'express';

const router = express.Router();

// Route de ping pour garder le service actif (appelée par cron)
router.get('/ping', (req, res) => {
  res.status(200).json({
    status: 'alive',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    message: 'Service is active - ping successful'
  });
});

// Route pour les tests manuels et monitoring
router.get('/health', (req, res) => {
  res.status(200).json({
    status: 'Server is running',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    uptime: process.uptime(),
    memory: process.memoryUsage()
  });
});

export default router;