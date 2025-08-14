// // === Alert Module ===
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
