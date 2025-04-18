require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

// ✅ Enable CORS with frontend URL from .env
app.use(cors({
  origin: process.env.FRONTEND_URL || '*', // Replace * with your deployed frontend if needed
  credentials: true,
}));

// ✅ Middleware to parse JSON request bodies
app.use(express.json());

// ✅ Serve Vite-built static frontend files (from Frontend/dist)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'Frontend/dist')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'Frontend/dist', 'index.html'));
  });
}

// ✅ Example API route
app.post('/ai/get-review', (req, res) => {
  const { code } = req.body;
  // Your AI logic can go here
  res.json({ review: `Reviewed code: ${code}` });
});

// ✅ Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`🚀 Server is running at http://localhost:${port}`);
});
