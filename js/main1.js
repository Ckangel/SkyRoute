// // === Alert Module ===
<<<<<<< HEAD
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
=======
async function fetchEvents() {
  const token = "gfmvDP56xpRYXvbUma1tdmTY8AO3XW7fYz73Tl3h";
  const now = new Date().toISOString();
  const response = await fetch(
    "https://api.predicthq.com/v1/events/?start.gte=" +
      now +
      "&category=festival&limit=20",
    {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    }
  );
  const { results } = await response.json();
  return results.map((e) => ({ title: e.title, url: e.url }));
}

fetch("flights.json")
  .then((response) => response.json())
  .then((data) => {
    localStorage.setItem("flightsData", JSON.stringify(data));
  });

const ctx = document.getElementById("regionChart").getContext("2d");
new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["North", "South", "East", "West"],
    datasets: [
      {
        label: "Flights",
        data: [12, 19, 3, 5],
        backgroundColor: "#007BFF",
      },
    ],
  },
});

document.addEventListener("DOMContentLoaded", () => {
  fetch("./data/testimonials.json")
    .then((response) => response.json())
    .then((data) => {
      const container = document.getElementById("testimonial-list");
      data.forEach(({ name, quote }) => {
        const block = document.createElement("blockquote");
        block.textContent = `“${quote}” – ${name}`;
        container.appendChild(block);
      });
    })
    .catch((error) => console.error("Error loading testimonials:", error));
});
>>>>>>> ccc2b69de9459d5b75efc36a2580227af98240f6
