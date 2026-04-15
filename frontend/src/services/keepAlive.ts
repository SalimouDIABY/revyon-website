// Service pour garder le backend actif
class KeepAliveService {
  private intervalId: number | null = null;
  private readonly PING_INTERVAL = 10 * 60 * 1000; // 10 minutes en millisecondes
  private readonly API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  // Démarre le service de ping automatique
  start() {
    if (this.intervalId) {
      console.log('KeepAlive service already running');
      return;
    }

    console.log('Starting KeepAlive service - pinging every 10 minutes');

    // Ping immédiat au démarrage
    this.ping();

    // Ping toutes les 10 minutes
    this.intervalId = window.setInterval(() => {
      this.ping();
    }, this.PING_INTERVAL);
  }

  // Arrête le service
  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
      console.log('KeepAlive service stopped');
    }
  }

  // Fait un ping au backend
  private async ping() {
    try {
      const response = await fetch(`${this.API_URL}/api/ping`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Backend ping successful:', data.timestamp);
      } else {
        console.warn('Backend ping failed:', response.status);
      }
    } catch (error) {
      console.warn('Backend ping error:', error);
    }
  }

  // Ping manuel pour les tests
  async manualPing() {
    await this.ping();
  }
}

// Instance globale du service
export const keepAliveService = new KeepAliveService();