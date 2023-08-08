var map = L.map("map").setView([43.7, -79.42], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// Define the cities, coordinates, and images
var cities = [
  {
    name: "Toronto",
    coordinates: [43.6426, -79.3871],
    content:
      '<a href="toronto.jpg" target="_blank"><img src="toronto.jpg" width="200px"></a>',
  },

  // Add more cities here...
];

// Iterate through the cities and add markers with popups
cities.forEach(function (city) {
  L.marker(city.coordinates).addTo(map).bindPopup(city.content);
});
