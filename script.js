var map = L.map("map").setView([43.7, -79.42], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// Define the cities, coordinates, and images
var cities = [
  {
    name: "CN_Tower",
    coordinates: [43.6426, -79.3871],
    content:
      '<a href="cn_tower.jpg" target="_blank"><img src="Pics/cn_tower.jpg" width="200px"></a>',
  },
  {
    name: "Blue_Mountain",
    coordinates: [44.5011, -80.3161],
    content:
      '<a href="Blue_Mountain.jpg" target="_blank"><img src="Pics/Blue_Mountain.jpg" width="200px"></a>',
  },
  {
    name: "Bogota",
    coordinates: [4.711, -74.0721],
    content:
      '<a href="Bogota.jpg" target="_blank"><img src="Pics/Bogota.jpg" width="200px"></a>',
  },
  {
    name: "Butterfly",
    coordinates: [43.813, -79.3198],
    content:
      '<a href="Butterfly.jpg" target="_blank"><img src="Pics/Butterfly.jpg" width="200px"></a>',
  },
  {
    name: "Cartagena",
    coordinates: [10.3932, -75.4832],
    content:
      '<a href="Cartagena.jpg" target="_blank"><img src="Pics/Catagena.jpg" width="200px"></a>',
  },
  {
    name: "Grand Bend",
    coordinates: [43.313, -81.7562],
    content:
      '<a href="Grand_Bend.jpg" target="_blank"><img src="Pics/Grand_Bend.jpg" width="200px"></a>',
  },
  {
    name: "Hamilton",
    coordinates: [43.2557, -79.8711],
    content:
      '<a href="Hamilton.jpg" target="_blank"><img src="Pics/Hamilton.jpg" width="200px"></a>',
  },
  // Add more cities here...
];

// Iterate through the cities and add markers with popups
cities.forEach(function (city) {
  L.marker(city.coordinates).addTo(map).bindPopup(city.content);
});
