require('dotenv').config();
const app = require('./src/app');

// Use Render's PORT (default: 10000) or fallback to 3000 for local dev
const PORT = process.env.PORT || 3000;

// Bind to 0.0.0.0 (required for Render)
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on http://0.0.0.0:${PORT}`);
});
