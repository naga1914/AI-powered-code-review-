require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

// Enable CORS with frontend URL
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
}));

// Middleware for JSON parsing
app.use(express.json());

// Serve static files from React app (only in production)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'frontend/build')));

  // All routes should be handled by the React app
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
  });
}

// Example API route
app.post('/ai/get-review', (req, res) => {
  const { code } = req.body;
  // Implement your AI code review logic here
  res.json({ review: `Reviewed code: ${code}` });
});

// Use environment port or default to 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
