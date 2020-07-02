const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on local host: ${PORT}`);
});

//express server basics
//variables to hold the data
//Create a set of routes for getting and posting table data
//Create a set of routes for displaying the HTML pages

// ## Phase II - For this second phase, aim to complete the following

// * Backend Team:

// Create a basic Express server.

// Your server at this point should do the BARE MINIMUM. (Effectively, it should just say: "Listening at PORT 3000" when the command node server.js is run.)

// * Frontend Team:

// Create three HTML files one called home.html, another called tables.html, and another called reserve.html. Use dummy data and create pages similar to the one shown to you on the sample Hot Reservation webpage.
// All: If you finish early, begin thinking about how the Data, API, and Routes should look.
