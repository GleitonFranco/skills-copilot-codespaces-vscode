// Create a web server with Express.js
// Create a route for POST /comments
// Add a comment to the comments array
// Respond with a status code of 201

// Create a new route for POST /comments
app.post('/comments', (req, res) => {
  // Get the comment from the request body
  const comment = req.body.comment;

  // Add the comment to the comments array
  comments.push(comment);

  // Respond with a status code of 201
  res.status(201).send();
});

// Export the comments array
module.exports = comments;