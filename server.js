const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse URL-encoded data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the root directory
app.use(express.static(__dirname)); // Serve static files from the root directory

// Route to serve the form
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); // Update path to index.html
});

// Route to handle form submission
app.post('/email', (req, res) => {
    const email = req.body.email;
    
    // Instead of sending an email, just send the confirmation page
    res.sendFile(path.join(__dirname, 'confirmation.html')); // Update path to confirmation.html
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


