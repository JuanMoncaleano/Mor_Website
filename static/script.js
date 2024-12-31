// Minimal script.js

// 1) Initialize the map
var map = L.map("map").setView([25.1304, -50.3468], 4);

// 2) Add the OSM tile layer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// 3) Create function for popup content
const createCityContent = (imageName) => `
  <div style="width: 200px;">
    <a href="Pics/${imageName}.jpg" target="_blank">
      <img src="Pics/${imageName}.jpg" width="200px">
    </a>
  </div>`;

// 4) Define your city markers
const cities = [
  {
    name: "Blue_Mountain",
    coordinates: [44.5011, -80.3161],
    content: createCityContent("Blue_Mountain"),
  },
  {
    name: "Bogota",
    coordinates: [4.711, -74.0721],
    content: createCityContent("Bogota"),
  },
  {
    name: "Casa",
    coordinates: [43.12, -79.81],
    content: createCityContent("Casa"),
  },
  // ... and so on
];

// 5) Place markers & bind popups
cities.forEach((city) => {
  const popup = L.popup({ maxWidth: 200 }).setContent(city.content);
  L.marker(city.coordinates).addTo(map).bindPopup(popup);
});
