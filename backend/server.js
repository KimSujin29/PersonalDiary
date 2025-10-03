// backend/server.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config();

const app = express();
connectDB();

// Middlewares
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' })); // allow frontend; change in production

// Routes
app.use('/api/diary', require('./routes/diary'));

// Health
app.get('/', (req, res) => res.send('Personal Diary API is running'));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
