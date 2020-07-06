# gt-hot-resturant

## Phase III - For this third phase, aim to complete the following

* Backend Team: add API routes
<!-- 
Create a set of variables (hint: arrays of objects) for holding the reservation and waitlist data -->

Create a set of routes that then display this data as JSONs. Users should be given these JSONs if they visit the appropriate page (i.e. if a user visits localhost:3000/api/tables they should see a JSON of table data).
res.json to see json? (i think he said)
res.sendFile

* Frontend Team: add view routes

Temporarily join the backend team. Your task will be to create Express routes that display your HTML pages when a user visits the appropriate page. (i.e. if a user visits localhost:3000/tables... they should be shown the table.html page.)

If you finish early begin creating the code necessary to convert your form data into JSON objects.


## Phase IV - For this fourth phase, aim to complete the following

* Backend Team:

Create the logic that handles reservation requests. Your code should work such that POST requests take in JSON objects, checks if there is any space left, then adds the JSON object to either the reservation array or the waitlist array. Your POST route should also respond to requests with a confirmation (true or false) of whether or not the requestor has a reservation (or is on the waiting list).

You should be using Postman to do all your testing at this point.

* Frontend Team:

Begin to do serious research on AJAX. Specifically, focus your attention on how AJAX can be used to do both GET and POST requests.

Then create the necessary code on your tables.html page such that it can retrieve data from the Backend Team's API. In essence you will be creating an AJAX GET request to retrieve the data.

Then create the necessary code on your reserve.html page such that it can send data to the Backend Team's API. In essence you will be creating an AJAX POST request to send the data.

All: This is the most challenging part of today's activity. Be persistent! You can do this!
