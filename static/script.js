// -------------- START OF script.js -------------- //

// Initialize the map
var map = new L.Map("map").setView([25.1304, -50.3468], 4);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// Helper function to create popup content
const createCityContent = (imageName) => `
  <div style="width: 400px;">
    <a href="${imageName}.jpg" target="_blank">
      <img src="Pics/${imageName}.jpg" width="400px">
    </a>
  </div>`;

// Cities data
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
    coordinates: [43.0924, -79.0717],
    content: createCityContent("Niagara"),
  },
  {
    name: "Ripleys",
    coordinates: [43.6422, -79.4866],
    content: createCityContent("Ripleys"),
  },
  {
    name: "WaterPark",
    coordinates: [43.0356, -79.0849],
    content: createCityContent("Water_Park"),
  },
  {
    name: "Grotto",
    coordinates: [45.2452, -81.5243],
    content: createCityContent("Babe_Grotto"),
  },
  {
    name: "Lion's Head",
    coordinates: [44.987148, -81.254608],
    content: createCityContent("Gang_BP"),
  },
  {
    name: "Graduation Juan",
    coordinates: [43.7282, -79.378],
    content: createCityContent("Grad_Juan"),
  },
  {
    name: "Volca Arenal",
    coordinates: [10.46433, -84.70343],
    content: createCityContent("Fortuna"),
  },
  {
    name: "Tour de Cacao",
    coordinates: [10.40050226418354, -84.57133113861823],
    content: createCityContent("Cacao"),
  },
  {
    name: "Puente colgante",
    coordinates: [10.46, -84.706],
    content: createCityContent("Bridge"),
  },
  {
    name: "Pinto",
    coordinates: [10.49844045020927, -84.71066369259368],
    content: createCityContent("Pinto"),
  },
];

// Place markers & popups
cities.forEach((city) => {
  const popup = L.popup({ maxWidth: 400 }).setContent(city.content);
  L.marker(city.coordinates).addTo(map).bindPopup(popup);
});

// Hangman Game
var words = ["bomboclat", "jazar", "mamahuevo"];
var currentWord = "";
var currentGuess = "";
var attemptsLeft = 0;

function startGame() {
  var randomIndex = Math.floor(Math.random() * words.length);
  currentWord = words[randomIndex];
  currentGuess = "_".repeat(currentWord.length);
  attemptsLeft = 6;
  document.getElementById("word-to-guess").innerText = currentGuess;
  document.getElementById("attempts-left").innerText =
    "Attempts left: " + attemptsLeft;
  document.getElementById("message").innerText = "Type a letter to guess!";
}

document.addEventListener("keydown", function (e) {
  if (attemptsLeft <= 0 || currentGuess.indexOf("_") === -1) return;

  var letter = e.key.toLowerCase();
  if (letter.length !== 1 || !/[a-z]/.test(letter)) return;

  var newGuess = "";
  var correctGuess = false;

  for (var i = 0; i < currentWord.length; i++) {
    if (currentWord[i] === letter) {
      newGuess += letter;
      correctGuess = true;
    } else {
      newGuess += currentGuess[i];
    }
  }

  if (!correctGuess) {
    attemptsLeft--;
    document.getElementById("attempts-left").innerText =
      "Attempts left: " + attemptsLeft;
    if (attemptsLeft === 0) {
      document.getElementById("message").innerText =
        "Another day another L! The word was: " + currentWord;
      return;
    }
  } else {
    currentGuess = newGuess;
    document.getElementById("word-to-guess").innerText = currentGuess;
    if (currentGuess.indexOf("_") === -1) {
      document.getElementById("message").innerText = "YESSIR! You got it!";
    }
  }
}

// -------------- END OF script.js -------------- //
