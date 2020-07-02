const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

const reservations = [];

const waitlist = [];

// // Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// * Frontend Team:
//Path to homepage/home.html
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});
// Tables page
app.get("/tables", function (req, res) {
  res.sendFile(path.join(_dirname, "tables.html"));
});
// Reserve Page
app.get("/reserve", function (req, res) {
  res.sendFile(path.join(_dirname, "reserve.html"));
});

// Displays reservations
app.get("/api/reservations", function (req, res) {
  return res.json(reservations);
});
// Displays waitlist
app.get("/api/waitlist", function (req, res) {
  return res.json(waitlist);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});

// Create three HTML files one called home.html, another called tables.html, and another called reserve.html. Use dummy data and create pages similar to the one shown to you on the sample Hot Reservation webpage.
// All: If you finish early, begin thinking about how the Data, API, and Routes should look.

// // Sets up the Express app to handle data parsing
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // Star Wars Characters (DATA)
// // =============================================================
// var characters = [
//   {
//     routeName: "yoda",
//     name: "Yoda",
//     role: "Jedi Master",
//     age: 900,
//     forcePoints: 2000
//   },
//   {
//     routeName: "darthmaul",
//     name: "Darth Maul",
//     role: "Sith Lord",
//     age: 200,
//     forcePoints: 1200
//   },
//   {
//     routeName: "obiwankenobi",
//     name: "Obi Wan Kenobi",
//     role: "Jedi Master",
//     age: 55,
//     forcePoints: 1350
//   }
// ];

// // Routes
// // =============================================================

// // Basic route that sends the user first to the AJAX Page
// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "view.html"));
// });

// app.get("/add", function(req, res) {
//   res.sendFile(path.join(__dirname, "add.html"));
// });

// // Displays all characters
// app.get("/api/characters", function(req, res) {
//   return res.json(characters);
// });

// // Displays a single character, or returns false
// app.get("/api/characters/:character", function(req, res) {
//   var chosen = req.params.character;

//   console.log(chosen);

//   for (var i = 0; i < characters.length; i++) {
//     if (chosen === characters[i].routeName) {
//       return res.json(characters[i]);
//     }
//   }

//   return res.json(false);
// });

// // Create New Characters - takes in JSON input
// app.post("/api/characters", function(req, res) {
//   // req.body hosts is equal to the JSON post sent from the user
//   // This works because of our body parsing middleware
//   var newCharacter = req.body;

//   // Using a RegEx Pattern to remove spaces from newCharacter
//   // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
//   newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();

//   console.log(newCharacter);

//   characters.push(newCharacter);

//   res.json(newCharacter);
// });

// // Starts the server to begin listening
// // =============================================================
// app.listen(PORT, function() {
//   console.log("App listening on PORT " + PORT);
// });
