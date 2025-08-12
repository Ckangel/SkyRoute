// // === Alert Module ===
const alertMessage = document.getElementById("alert-message");

const SkyRouteAlerts = {
  news: [
    "New festival in Ghana: Explore the vibrant Ashanti culture at the Kumasi Adae Festival, starting August 15, 2025!",
    "Nigeria's Osun-Osogbo Festival 2025: A UNESCO site opens for tourists with enhanced safety measures.",
    "Senegal's Goree Island tours expanded: Visit historic sites with new guided tours starting next month.",
  ],
  update() {
    const randomNews = this.news[Math.floor(Math.random() * this.news.length)];
    alertMessage.textContent = randomNews;
  },
  init() {
    this.update();
    setInterval(() => this.update(), 5000);
  },
};

SkyRouteAlerts.init();
