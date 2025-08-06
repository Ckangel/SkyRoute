// === Sidebar Toggle ===
const menuToggle = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".sidebar");

menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");
});

// Close sidebar if clicked outside on small screens
// document.addEventListener("click", (event) => {
//   if (
//     window.innerWidth <= 768 &&
//     !sidebar.contains(event.target) &&
//     !menuToggle.contains(event.target)
//   ) {
//     sidebar.classList.remove("collapsed");
//   }
// });

// // === Time Display Elements ===
// const ghanaTime = document.getElementById("ghana-time");
// const nigeriaTime = document.getElementById("nigeria-time");
// const tanzaniaTime = document.getElementById("tanzania-time");

// // === Clock Module ===
// const SkyRouteClock = {
//   update() {
//     const now = new Date();
//     const formatOptions = {
//       hour: "2-digit",
//       minute: "2-digit",
//       second: "2-digit",
//     };

//     ghanaTime.textContent = now.toLocaleString("en-US", {
//       timeZone: "Africa/Accra",
//       ...formatOptions,
//     });
//     nigeriaTime.textContent = now.toLocaleString("en-US", {
//       timeZone: "Africa/Lagos",
//       ...formatOptions,
//     });
//     tanzaniaTime.textContent = now.toLocaleString("en-US", {
//       timeZone: "Africa/Dar_es_Salaam",
//       ...formatOptions,
//     });
//   },
//   init() {
//     this.update();
//     setInterval(() => this.update(), 1000);
//   },
// };

// SkyRouteClock.init();

// // === Alert Module ===
// const alertMessage = document.getElementById("alert-message");

// const SkyRouteAlerts = {
//   news: [
//     "New festival in Ghana: Explore the vibrant Ashanti culture at the Kumasi Adae Festival, starting August 15, 2025!",
//     "Nigeria's Osun-Osogbo Festival 2025: A UNESCO site opens for tourists with enhanced safety measures.",
//     "Senegal's Goree Island tours expanded: Visit historic sites with new guided tours starting next month.",
//   ],
//   update() {
//     const randomNews = this.news[Math.floor(Math.random() * this.news.length)];
//     alertMessage.textContent = randomNews;
//   },
//   init() {
//     this.update();
//     setInterval(() => this.update(), 5000);
//   },
// };

// SkyRouteAlerts.init();

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


//   // sky route
//    // Aviation Stack API key (replace with your own)
//    const API_KEY = 'bcb571f2f023cb4c798761d96a415314';

//    // Fetch flight route notification from Aviation Stack API
//    async function fetchFlightRoutes() {
//        try {
//            const response = await fetch(`http://api.aviationstack.com/v1/routes?access_key=${API_KEY}&limit=1`);
//            const data = await response.json();
//            if (data.data && data.data.length > 0) {
//                const route = data.data[0];
//                document.getElementById('flightNotification').innerHTML = `
//                    <p>Latest Route: ${route.departure.iata} (${route.departure.name}) to 
//                    ${route.arrival.iata} (${route.arrival.name}) operated by ${route.airline.name}</p>
//                `;
//            } else {
//                document.getElementById('flightNotification').innerHTML = '<p>No route information available.</p>';
//            }
//        } catch (error) {
//            console.error('Error fetching flight routes:', error);
//            document.getElementById('flightNotification').innerHTML = '<p>Error loading flight route information.</p>';
//        }
//    }

//    // List of countries for destination dropdown (ISO 3166-1 alpha-2 codes)
//    const countries = [
//        { code: 'AF', name: 'Afghanistan' },
//        { code: 'AL', name: 'Albania' },
//        { code: 'DZ', name: 'Algeria' },
//        { code: 'AD', name: 'Andorra' },
//        { code: 'AO', name: 'Angola' },
//        { code: 'AR', name: 'Argentina' },
//        { code: 'AM', name: 'Armenia' },
//        { code: 'AU', name: 'Australia' },
//        { code: 'AT', name: 'Austria' },
//        { code: 'AZ', name: 'Azerbaijan' },
//        { code: 'BS', name: 'Bahamas' },
//        { code: 'BH', name: 'Bahrain' },
//        { code: 'BD', name: 'Bangladesh' },
//        { code: 'BB', name: 'Barbados' },
//        { code: 'BY', name: 'Belarus' },
//        { code: 'BE', name: 'Belgium' },
//        { code: 'BZ', name: 'Belize' },
//        { code: 'BJ', name: 'Benin' },
//        { code: 'BT', name: 'Bhutan' },
//        { code: 'BO', name: 'Bolivia' },
//        { code: 'BA', name: 'Bosnia and Herzegovina' },
//        { code: 'BW', name: 'Botswana' },
//        { code: 'BR', name: 'Brazil' },
//        { code: 'BN', name: 'Brunei' },
//        { code: 'BG', name: 'Bulgaria' },
//        { code: 'BF', name: 'Burkina Faso' },
//        { code: 'BI', name: 'Burundi' },
//        { code: 'KH', name: 'Cambodia' },
//        { code: 'CM', name: 'Cameroon' },
//        { code: 'CA', name: 'Canada' },
//        { code: 'CV', name: 'Cape Verde' },
//        { code: 'CF', name: 'Central African Republic' },
//        { code: 'TD', name: 'Chad' },
//        { code: 'CL', name: 'Chile' },
//        { code: 'CN', name: 'China' },
//        { code: 'CO', name: 'Colombia' },
//        { code: 'KM', name: 'Comoros' },
//        { code: 'CG', name: 'Congo' },
//        { code: 'CR', name: 'Costa Rica' },
//        { code: 'HR', name: 'Croatia' },
//        { code: 'CU', name: 'Cuba' },
//        { code: 'CY', name: 'Cyprus' },
//        { code: 'CZ', name: 'Czech Republic' },
//        { code: 'DK', name: 'Denmark' },
//        { code: 'DJ', name: 'Djibouti' },
//        { code: 'DM', name: 'Dominica' },
//        { code: 'DO', name: 'Dominican Republic' },
//        { code: 'EC', name: 'Ecuador' },
//        { code: 'EG', name: 'Egypt' },
//        { code: 'SV', name: 'El Salvador' },
//        { code: 'GQ', name: 'Equatorial Guinea' },
//        { code: 'ER', name: 'Eritrea' },
//        { code: 'EE', name: 'Estonia' },
//        { code: 'ET', name: 'Ethiopia' },
//        { code: 'FJ', name: 'Fiji' },
//        { code: 'FI', name: 'Finland' },
//        { code: 'FR', name: 'France' },
//        { code: 'GA', name: 'Gabon' },
//        { code: 'GM', name: 'Gambia' },
//        { code: 'GE', name: 'Georgia' },
//        { code: 'DE', name: 'Germany' },
//        { code: 'GH', name: 'Ghana' },
//        { code: 'GR', name: 'Greece' },
//        { code: 'GD', name: 'Grenada' },
//        { code: 'GT', name: 'Guatemala' },
//        { code: 'GN', name: 'Guinea' },
//        { code: 'GW', name: 'Guinea-Bissau' },
//        { code: 'GY', name: 'Guyana' },
//        { code: 'HT', name: 'Haiti' },
//        { code: 'HN', name: 'Honduras' },
//        { code: 'HU', name: 'Hungary' },
//        { code: 'IS', name: 'Iceland' },
//        { code: 'IN', name: 'India' },
//        { code: 'ID', name: 'Indonesia' },
//        { code: 'IR', name: 'Iran' },
//        { code: 'IQ', name: 'Iraq' },
//        { code: 'IE', name: 'Ireland' },
//        { code: 'IL', name: 'Israel' },
//        { code: 'IT', name: 'Italy' },
//        { code: 'JM', name: 'Jamaica' },
//        { code: 'JP', name: 'Japan' },
//        { code: 'JO', name: 'Jordan' },
//        { code: 'KZ', name: 'Kazakhstan' },
//        { code: 'KE', name: 'Kenya' },
//        { code: 'KI', name: 'Kiribati' },
//        { code: 'KP', name: 'North Korea' },
//        { code: 'KR', name: 'South Korea' },
//        { code: 'KW', name: 'Kuwait' },
//        { code: 'KG', name: 'Kyrgyzstan' },
//        { code: 'LA', name: 'Laos' },
//        { code: 'LV', name: 'Latvia' },
//        { code: 'LB', name: 'Lebanon' },
//        { code: 'LS', name: 'Lesotho' },
//        { code: 'LR', name: 'Liberia' },
//        { code: 'LY', name: 'Libya' },
//        { code: 'LI', name: 'Liechtenstein' },
//        { code: 'LT', name: 'Lithuania' },
//        { code: 'LU', name: 'Luxembourg' },
//        { code: 'MG', name: 'Madagascar' },
//        { code: 'MW', name: 'Malawi' },
//        { code: 'MY', name: 'Malaysia' },
//        { code: 'MV', name: 'Maldives' },
//        { code: 'ML', name: 'Mali' },
//        { code: 'MT', name: 'Malta' },
//        { code: 'MH', name: 'Marshall Islands' },
//        { code: 'MR', name: 'Mauritania' },
//        { code: 'MU', name: 'Mauritius' },
//        { code: 'MX', name: 'Mexico' },
//        { code: 'FM', name: 'Micronesia' },
//        { code: 'MD', name: 'Moldova' },
//        { code: 'MC', name: 'Monaco' },
//        { code: 'MN', name: 'Mongolia' },
//        { code: 'ME', name: 'Montenegro' },
//        { code: 'MA', name: 'Morocco' },
//        { code: 'MZ', name: 'Mozambique' },
//        { code: 'MM', name: 'Myanmar' },
//        { code: 'NA', name: 'Namibia' },
//        { code: 'NR', name: 'Nauru' },
//        { code: 'NP', name: 'Nepal' },
//        { code: 'NL', name: 'Netherlands' },
//        { code: 'NZ', name: 'New Zealand' },
//        { code: 'NI', name: 'Nicaragua' },
//        { code: 'NE', name: 'Niger' },
//        { code: 'NG', name: 'Nigeria' },
//        { code: 'NO', name: 'Norway' },
//        { code: 'OM', name: 'Oman' },
//        { code: 'PK', name: 'Pakistan' },
//        { code: 'PW', name: 'Palau' },
//        { code: 'PA', name: 'Panama' },
//        { code: 'PG', name: 'Papua New Guinea' },
//        { code: 'PY', name: 'Paraguay' },
//        { code: 'PE', name: 'Peru' },
//        { code: 'PH', name: 'Philippines' },
//        { code: 'PL', name: 'Poland' },
//        { code: 'PT', name: 'Portugal' },
//        { code: 'QA', name: 'Qatar' },
//        { code: 'RO', name: 'Romania' },
//        { code: 'RU', name: 'Russia' },
//        { code: 'RW', name: 'Rwanda' },
//        { code: 'KN', name: 'Saint Kitts and Nevis' },
//        { code: 'LC', name: 'Saint Lucia' },
//        { code: 'VC', name: 'Saint Vincent and the Grenadines' },
//        { code: 'WS', name: 'Samoa' },
//        { code: 'SM', name: 'San Marino' },
//        { code: 'ST', name: 'São Tomé and Príncipe' },
//        { code: 'SA', name: 'Saudi Arabia' },
//        { code: 'SN', name: 'Senegal' },
//        { code: 'RS', name: 'Serbia' },
//        { code: 'SC', name: 'Seychelles' },
//        { code: 'SL', name: 'Sierra Leone' },
//        { code: 'SG', name: 'Singapore' },
//        { code: 'SK', name: 'Slovakia' },
//        { code: 'SI', name: 'Slovenia' },
//        { code: 'SB', name: 'Solomon Islands' },
//        { code: 'SO', name: 'Somalia' },
//        { code: 'ZA', name: 'South Africa' },
//        { code: 'SS', name: 'South Sudan' },
//        { code: 'ES', name: 'Spain' },
//        { code: 'LK', name: 'Sri Lanka' },
//        { code: 'SD', name: 'Sudan' },
//        { code: 'SR', name: 'Suriname' },
//        { code: 'SE', name: 'Sweden' },
//        { code: 'CH', name: 'Switzerland' },
//        { code: 'SY', name: 'Syria' },
//        { code: 'TW', name: 'Taiwan' },
//        { code: 'TJ', name: 'Tajikistan' },
//        { code: 'TZ', name: 'Tanzania' },
//        { code: 'TH', name: 'Thailand' },
//        { code: 'TL', name: 'Timor-Leste' },
//        { code: 'TG', name: 'Togo' },
//        { code: 'TO', name: 'Tonga' },
//        { code: 'TT', name: 'Trinidad and Tobago' },
//        { code: 'TN', name: 'Tunisia' },
//        { code: 'TR', name: 'Turkey' },
//        { code: 'TM', name: 'Turkmenistan' },
//        { code: 'TV', name: 'Tuvalu' },
//        { code: 'UG', name: 'Uganda' },
//        { code: 'UA', name: 'Ukraine' },
//        { code: 'AE', name: 'United Arab Emirates' },
//        { code: 'GB', name: 'United Kingdom' },
//        { code: 'US', name: 'United States' },
//        { code: 'UY', name: 'Uruguay' },
//        { code: 'UZ', name: 'Uzbekistan' },
//        { code: 'VU', name: 'Vanuatu' },
//        { code: 'VE', name: 'Venezuela' },
//        { code: 'VN', name: 'Vietnam' },
//        { code: 'YE', name: 'Yemen' },
//        { code: 'ZM', name: 'Zambia' },
//        { code: 'ZW', name: 'Zimbabwe' }
//    ];

//    // Dummy hotel data (replace with real hotel API if available)
//    const hotels = {
//        'US': [
//            { name: 'Hilton New York', value: 'hilton-ny' },
//            { name: 'Marriott Los Angeles', value: 'marriott-la' }
//        ],
//        'FR': [
//            { name: 'Paris Marriott', value: 'paris-marriott' },
//            { name: 'Le Bristol Paris', value: 'le-bristol' }
//        ],
//        'JP': [
//            { name: 'Tokyo Hilton', value: 'tokyo-hilton' },
//            { name: 'Hyatt Regency Tokyo', value: 'hyatt-tokyo' }
//        ],
//        'default': [
//            { name: 'Generic Hotel', value: 'generic-hotel' },
//            { name: 'Standard Inn', value: 'standard-inn' }
//        ]
//    };

//    // Populate destination dropdown
//    function populateDestinations() {
//        const destinationSelect = document.getElementById('destination');
//        countries.forEach(country => {
//            const option = document.createElement('option');
//            option.value = country.code;
//            option.textContent = country.name;
//            destinationSelect.appendChild(option);
//        });
//    }

//    // Populate hotels based on destination
//    function populateHotels(countryCode) {
//        const hotelSelect = document.getElementById('hotel');
//        hotelSelect.innerHTML = '<option value="">Select Hotel</option>';
//        const availableHotels = hotels[countryCode] || hotels['default'];
//        availableHotels.forEach(hotel => {
//            const option = document.createElement('option');
//            option.value = hotel.value;
//            option.textContent = hotel.name;
//            hotelSelect.appendChild(option);
//        });
//    }

//    // Form validation
//    function validateForm() {
//        let isValid = true;
//        const fields = [
//            { id: 'firstName', errorId: 'firstNameError', regex: /^[A-Za-z]{2,}$/, message: 'First name must be at least 2 letters' },
//            { id: 'lastName', errorId: 'lastNameError', regex: /^[A-Za-z]{2,}$/, message: 'Last name must be at least 2 letters' },
//            { id: 'phoneNumber', errorId: 'phoneNumberError', regex: /^\d{7,15}$/, message: 'Phone number must be 7-15 digits' },
//            { id: 'email', errorId: 'emailError', regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email address' },
//            { id: 'origin', errorId: 'originError', regex: /.+/, message: 'Please select an origin' },
//            { id: 'destination', errorId: 'destinationError', regex: /.+/, message: 'Please select a destination' },
//            { id: 'hotel', errorId: 'hotelError', regex: /.+/, message: 'Please select a hotel' }
//        ];

//        fields.forEach(field => {
//            const input = document.getElementById(field.id);
//            const error = document.getElementById(field.errorId);
//            if (!field.regex.test(input.value)) {
//                input.classList.add('error');
//                error.textContent = field.message;
//                error.style.display = 'block';
//                isValid = false;
//            } else {
//                input.classList.remove('error');
//                error.style.display = 'none';
//            }
//        });

//        return isValid;
//    }

//    // Send booking details via mailto
//    function sendBookingEmail(formData) {
//        const { firstName, lastName, phoneCode, phoneNumber, email, origin, destination, hotel } = formData;
//        const destinationName = countries.find(c => c.code === destination)?.name || destination;
//        const hotelName = Array.from(document.getElementById('hotel').options).find(opt => opt.value === hotel)?.text || hotel;
//        const originName = Array.from(document.getElementById('origin').options).find(opt => opt.value === origin)?.text || origin;
//        const subject = encodeURIComponent('Your Travel Booking Confirmation');
//        const body = encodeURIComponent(
//            `Dear ${firstName} ${lastName},\n\n` +
//            `Thank you for your booking! Here are your details:\n\n` +
//            `Name: ${firstName} ${lastName}\n` +
//            `Phone: ${phoneCode}${phoneNumber}\n` +
//            `Email: ${email}\n` +
//            `Travel: From ${originName} to ${destinationName}\n` +
//            `Hotel: ${hotelName}\n\n` +
//            `We look forward to assisting you with your travel plans!\n` +
//            `Best regards,\nTravel Itinerary Team`
//        );
//        const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;
//        window.location.href = mailtoLink;
//    }

//    // Event listeners
//    document.getElementById('destination').addEventListener('change', (e) => {
//        populateHotels(e.target.value);
//    });

//    document.getElementById('travelForm').addEventListener('submit', (e) => {
//        e.preventDefault();
//        if (validateForm()) {
//            const formData = {
//                firstName: document.getElementById('firstName').value,
//                lastName: document.getElementById('lastName').value,
//                phoneCode: document.getElementById('phoneCode').value,
//                phoneNumber: document.getElementById('phoneNumber').value,
//                email: document.getElementById('email').value,
//                origin: document.getElementById('origin').value,
//                destination: document.getElementById('destination').value,
//                hotel: document.getElementById('hotel').value
//            };
//            sendBookingEmail(formData);
//            document.getElementById('successMessage').style.display = 'block';
//            setTimeout(() => {
//                document.getElementById('successMessage').style.display = 'none';
//            }, 5000); // Hide success message after 5 seconds
//            document.getElementById('travelForm').reset();
//            document.getElementById('hotel').innerHTML = '<option value="">Select Hotel</option>';
//        }
//    });

//    // Initialize
//    fetchFlightRoutes();
//    populateDestinations();


  //  detect user time zone
  
  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const userCity = userTimeZone.split('/').pop().replace('_', ' '); // e.g., "Dar es Salaam" from "Africa/Dar_es_Salaam"

  // Define time zones including user's detected time zone
  const timeZones = [
      { name: 'New York', zone: 'America/New_York' },
      { name: 'London', zone: 'Europe/London' },
      { name: 'Tokyo', zone: 'Asia/Tokyo' },
      { name: 'Sydney', zone: 'Australia/Sydney' },
      { name: userCity, zone: userTimeZone } // Dynamically add user's time zone
  ];

  // Function to format time for a given time zone
  function getFormattedTime(timeZone) {
      const options = {
          timeZone: timeZone,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
          timeZoneName: 'short'
      };
      return new Intl.DateTimeFormat('en-US', options).format(new Date());
  }

  // Function to update times and save to localStorage
  function updateTimes() {
      const timeData = {};
      const timeZonesContainer = document.getElementById('timeZones');
      timeZonesContainer.innerHTML = '';

      timeZones.forEach(({ name, zone }) => {
          const time = getFormattedTime(zone);
          timeData[name] = { zone, time };

          const timeElement = document.createElement('div');
          timeElement.className = 'time-zone';
          timeElement.innerHTML = `<span>${name}:</span> ${time}`;
          timeZonesContainer.appendChild(timeElement);
      });

      // Save to localStorage
      localStorage.setItem('worldTimes', JSON.stringify(timeData));
  }

  // Load times from localStorage on page load
  function loadTimes() {
      const savedTimes = localStorage.getItem('worldTimes');
      if (savedTimes) {
          const timeData = JSON.parse(savedTimes);
          const timeZonesContainer = document.getElementById('timeZones');
          timeZonesContainer.innerHTML = '';

          Object.entries(timeData).forEach(([name, { time }]) => {
              const timeElement = document.createElement('div');
              timeElement.className = 'time-zone';
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
  window.addEventListener('load', () => {
      loadTimes();
      setInterval(updateTimes, 1000);
  });