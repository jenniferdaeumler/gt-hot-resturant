const express = require("express");

const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;

const tables = [];

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
  res.sendFile(path.join(__dirname, "tables.html"));
});
// Reserve Page
app.get("/reserve", function (req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

// Displays tables 
app.get("/api/tables", function (req, res) {
  return res.json(tables);
});
// Displays waitlist
app.get("/api/waitlist", function (req, res) {
  return res.json(waitlist);
});

//Reservation Request (Back-End) Conditional needed
app.post("/api/tables", function(req, res) {
  const newTable = req.body;

  newTable.routeName = newTable.name.replace(/\s+/g, "").toLowerCase();

  console.log(newTable);
  tables.push(newTable);
  res.json(newTable);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});


// // Create New Characters - takes in JSON input
// app.post("/api/characters", function(req, res) {
//   // req.body hosts is equal to the JSON post sent from the user
//   // This works because of our body parsing middleware
//   var newcharacter = req.body;

// //   console.log(newcharacter);.
//   // We then add the json the user sent to the character array
//   characters.push(newcharacter);

//   // We then display the JSON to the users
//   res.json(newcharacter);
// });

