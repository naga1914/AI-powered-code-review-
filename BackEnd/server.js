require('dotenv').config()
const app = require('./src/app')

const cors = require('cors');

app.use(cors({
  origin: 'https://your-frontend-domain.vercel.app', // ✅ Your actual frontend deployed URL
  credentials: true,
}));


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})