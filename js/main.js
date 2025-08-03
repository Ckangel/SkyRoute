// === Sidebar Toggle ===
const menuToggle = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".sidebar");

menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");
});

// Close sidebar if clicked outside on small screens
document.addEventListener("click", (event) => {
  if (
    window.innerWidth <= 768 &&
    !sidebar.contains(event.target) &&
    !menuToggle.contains(event.target)
  ) {
    sidebar.classList.remove("collapsed");
  }
});

// === Time Display Elements ===
const ghanaTime = document.getElementById("ghana-time");
const nigeriaTime = document.getElementById("nigeria-time");
const tanzaniaTime = document.getElementById("tanzania-time");

// === Clock Module ===
const SkyRouteClock = {
  update() {
    const now = new Date();
    const formatOptions = {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };

    ghanaTime.textContent = now.toLocaleString("en-US", {
      timeZone: "Africa/Accra",
      ...formatOptions,
    });
    nigeriaTime.textContent = now.toLocaleString("en-US", {
      timeZone: "Africa/Lagos",
      ...formatOptions,
    });
    tanzaniaTime.textContent = now.toLocaleString("en-US", {
      timeZone: "Africa/Dar_es_Salaam",
      ...formatOptions,
    });
  },
  init() {
    this.update();
    setInterval(() => this.update(), 1000);
  },
};

SkyRouteClock.init();

// === Alert Module ===
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

// === Tour Content Loader ===
fetch("data/description.json")
  .then((response) => response.json())
  .then((data) => {
    const contentDiv = document.getElementById("content");
    data.forEach((item) => {
      const div = document.createElement("div");
      div.className = "tour";
      div.innerHTML = `<h2>${item.title}</h2><p>${item.description}</p>`;
      contentDiv.appendChild(div);
    });
  })
  .catch((error) => {
    console.error("Failed to fetch data: ", error);
  });
