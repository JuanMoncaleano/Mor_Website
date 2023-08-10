const map = L.map("map").setView([43.7, -79.42], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const createCityContent = (imageName) => `
  <a href="${imageName}.jpg" target="_blank">
    <img src="Pics/${imageName}.jpg" width="200px">
  </a>`;

const cities = [
  {
    name: "CN_Tower",
    coordinates: [43.6426, -79.3871],
    content: createCityContent("cn_tower"),
  },
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
    name: "Butterfly",
    coordinates: [43.813, -79.3198],
    content: createCityContent("Butterfly"),
  },
  {
    name: "Cartagena",
    coordinates: [10.3932, -75.4832],
    content: createCityContent("Cartagena"),
  },
  {
    name: "Grand Bend",
    coordinates: [43.313, -81.7562],
    content: createCityContent("Grand_Bend"),
  },
  {
    name: "Hamilton",
    coordinates: [43.2557, -79.8711],
    content: createCityContent("Hamilton"),
  },
  // Add more cities here...
];

cities.forEach((city) => {
  L.marker(city.coordinates).addTo(map).bindPopup(city.content);
});
