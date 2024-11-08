// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Import comments.js
const comments = require('./comments');

// Create a GET endpoint that returns all the comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Create a GET endpoint that returns a single comment
app.get('/comments/:id', (req, res) => {
    const id = Number(req.params.id);
    const comment = comments.find((comment) => comment.id === id);
    res.json(comment);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});