require('dotenv').config(); // Load environment variables from .env
const express = require('express');
const mongoose = require('mongoose');
const userRoute = require('./routes/user'); // Make sure this path is correct

const app = express();

// Middleware
app.use(express.json()); // Parses incoming JSON requests

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected'))
.catch((err) => console.error('❌ MongoDB connection error:', err.message));

// Use user routes under /api/user
app.use('/api/user', userRoute);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
