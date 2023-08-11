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
    coordinates: [43.1249, -79.8113],
    content: createCityContent("Casa"),
  },
  {
    name: "Cartagena",
    coordinates: [10.3932, -75.4832],
    content: createCityContent("Cartagena"),
  },
  {
    name: "CN_Tower",
    coordinates: [43.6426, -79.3871],
    content: createCityContent("cn_tower"),
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
  {
    name: "Medellin",
    coordinates: [6.2476, -75.5658],
    content: createCityContent("Medellin"),
  },
  {
    name: "Muskoka",
    coordinates: [45.1841, -79.4085],
    content: createCityContent("Muskoka"),
  },
  {
    name: "Niagara",
    coordinates: [43.0896, -79.0849],
    content: createCityContent("Niagara"),
  },
  {
    name: "Ripleys",
    coordinates: [43.6422, -79.3866],
    content: createCityContent("Ripleys"),
  },
  {
    name: "WaterPark",
    coordinates: [43.0924, -79.0717],
    content: createCityContent("Water_Park"),
  },

  // Add more cities here...
];

cities.forEach((city) => {
  L.marker(city.coordinates).addTo(map).bindPopup(city.content);
});
