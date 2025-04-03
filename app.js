// Import required modules
const express = require('express');
const bodyParser = require('body-parser');

// Create an Express application
const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Define the /endpoint route to handle POST requests
app.post('/endpoint', (req, res) => {
    const data = req.body; // Get JSON data from the request body
    console.log("Received data:", data); // Print the received data
    res.json({ status: 'success' }); // Send JSON response
});

// Start the server
const port = 5000; // Port to listen on
app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on http://0.0.0.0:${port}`);
});
