require('dotenv').config()
const app = require('./src/app')
const cors = require('cors');

app.use(cors({
  origin: 'https://your-frontend.vercel.app', // OR '*' during dev/testing
  credentials: true,
}));



app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})