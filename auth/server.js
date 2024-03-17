const express = require('express');
const app = express();

// Define route handlers
app.get('/auth', (req, res) => {
    res.send('This is the auth route');
});

app.get('/auth/register', (req, res) => {
    res.send('This is the register route');
});

// Start the server
app.listen(3000, () => {
    console.log('Auth server is up');
});
