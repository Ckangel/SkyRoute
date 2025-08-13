const url =
  "https://api.ipstack.com/72.ß29.28.185,110.174.165.78?access_key=a9b57e3b51c26e54";
const options = {
  method: "GET",
};

try {
  const response = await fetch(url, options);
  const result = await response.text();
  console.log(result);
} catch (error) {
  console.error(error);
}

// Close sidebar if clicked outside on small screens
const sidebar = document.getElementById("sidebar");
const menuToggle = document.getElementById("menuToggle");
if (sidebar && menuToggle) {
  document.addEventListener("click", (event) => {
    if (
      window.innerWidth <= 768 &&
      !sidebar.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      sidebar.classList.remove("collapsed");
    }
  });
}

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

    if (ghanaTime)
      ghanaTime.textContent = now.toLocaleString("en-US", {
        timeZone: "Africa/Accra",
        ...formatOptions,
      });
    if (nigeriaTime)
      nigeriaTime.textContent = now.toLocaleString("en-US", {
        timeZone: "Africa/Lagos",
        ...formatOptions,
      });
    if (tanzaniaTime)
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
    if (alertMessage) alertMessage.textContent = randomNews;
  },
  init() {
    this.update();
    setInterval(() => this.update(), 5000);
  },
};

SkyRouteAlerts.init();
//   init() {
// === Tour Content Loader ===
fetch("data/description.json")
  .then((response) => response.json())
  .then((data) => {
    const contentDiv = document.getElementById("content");
    if (contentDiv) {
      data.forEach((item) => {
        const div = document.createElement("div");
        div.className = "tour";
        div.innerHTML = `<h2>${item.title}</h2><p>${item.description}</p>`;
        contentDiv.appendChild(div);
      });
    }
  })
  .catch((error) => {
    console.error("Failed to fetch data: ", error);
  });

fetch("partials/header.html")
  .then((res) => res.text())
  .then((data) => {
    const headerElem = document.getElementById("header");
    if (headerElem) headerElem.innerHTML = data;
  });

fetch("partials/footer.html")
  .then((res) => res.text())
  .then((data) => {
    const footerElem = document.getElementById("footer");
    if (footerElem) footerElem.innerHTML = data;
  });

SkyRouteClock.init();
const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
const userCity = userTimeZone.split("/").pop().replace("_", " "); // e.g., "Dar es Salaam" from "Africa/Dar_es_Salaam"

// Define time zones including user's detected time zone
const timeZones = [
  { name: "New York", zone: "America/New_York" },
  { name: "London", zone: "Europe/London" },
  { name: "Tokyo", zone: "Asia/Tokyo" },
  { name: "Sydney", zone: "Australia/Sydney" },
  { name: userCity, zone: userTimeZone }, // Dynamically add user's time zone
];

// Function to format time for a given time zone
function getFormattedTime(timeZone) {
  const options = {
    timeZone: timeZone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZoneName: "short",
  };
  return new Intl.DateTimeFormat("en-US", options).format(new Date());
}

// Function to update times and save to localStorage
function updateTimes() {
  const timeData = {};
  const timeZonesContainer = document.getElementById("timeZones");
  timeZonesContainer.innerHTML = "";

  timeZones.forEach(({ name, zone }) => {
    const time = getFormattedTime(zone);
    timeData[name] = { zone, time };

    const timeElement = document.createElement("div");
    timeElement.className = "time-zone";
    timeElement.innerHTML = `<span>${name}:</span> ${time}`;
    timeZonesContainer.appendChild(timeElement);
  });

  // Save to localStorage
  localStorage.setItem("worldTimes", JSON.stringify(timeData));
}

// Load times from localStorage on page load
function loadTimes() {
  const savedTimes = localStorage.getItem("worldTimes");
  if (savedTimes) {
    const timeData = JSON.parse(savedTimes);
    const timeZonesContainer = document.getElementById("timeZones");
    timeZonesContainer.innerHTML = "";

    Object.entries(timeData).forEach(([name, { time }]) => {
      const timeElement = document.createElement("div");
      timeElement.className = "time-zone";
      timeElement.innerHTML = `<span>${name}:</span> ${time}`;
      timeZonesContainer.appendChild(timeElement);
    });

    // Update immediately after loading to ensure fresh times
    setTimeout(updateTimes, 1000);
  } else {
    updateTimes();
  }
}

// Update times every second
window.addEventListener("load", () => {
  loadTimes();
  setInterval(updateTimes, 1000);
});

// Sample data (replace with real API data in production)
const flightData = {
  totalFlights: 120000,
  topDestination: "New York (JFK)",
  avgDuration: 3.5,
  regions: {
    labels: [
      "North America",
      "Europe",
      "Asia",
      "Africa",
      "South America",
      "Oceania",
    ],
    data: [30000, 25000, 20000, 15000, 10000, 5000],
  },
  destinations: {
    labels: [
      "New York (JFK)",
      "London (LHR)",
      "Tokyo (HND)",
      "Sydney (SYD)",
      "Lagos (LOS)",
    ],
    data: [35000, 30000, 25000, 20000, 10000],
  },
};

// Update stats and charts
function updateFlightStats() {
  const totalFlightsElem = document.getElementById("totalFlights");
  if (totalFlightsElem)
    totalFlightsElem.textContent = flightData.totalFlights.toLocaleString();

  const topDestinationElem = document.getElementById("topDestination");
  if (topDestinationElem)
    topDestinationElem.textContent = flightData.topDestination;

  const avgDurationElem = document.getElementById("avgDuration");
  if (avgDurationElem)
    avgDurationElem.textContent = `${flightData.avgDuration} hrs`;

  // Region Chart (Bar)
  const regionChartElem = document.getElementById("regionChart");
  if (regionChartElem) {
    const regionCtx = regionChartElem.getContext("2d");
    new Chart(regionCtx, {
      type: "bar",
      data: {
        labels: flightData.regions.labels,
        datasets: [
          {
            label: "Flights by Region",
            data: flightData.regions.data,
            backgroundColor: "rgba(0, 123, 255, 0.5)",
            borderColor: "rgba(0, 123, 255, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            title: { display: true, text: "Number of Flights" },
          },
        },
      },
    });
  }

  // Destination Chart (Pie)
  const destinationChartElem = document.getElementById("destinationChart");
  if (destinationChartElem) {
    const destinationCtx = destinationChartElem.getContext("2d");
    new Chart(destinationCtx, {
      type: "pie",
      data: {
        labels: flightData.destinations.labels,
        datasets: [
          {
            label: "Top Destinations",
            data: flightData.destinations.data,
            backgroundColor: [
              "rgba(255, 99, 132, 0.5)",
              "rgba(54, 162, 235, 0.5)",
              "rgba(255, 206, 86, 0.5)",
              "rgba(75, 192, 192, 0.5)",
              "rgba(153, 102, 255, 0.5)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
      },
    });
  }
}

// Call the stats update function on page load
window.addEventListener("load", updateFlightStats);
