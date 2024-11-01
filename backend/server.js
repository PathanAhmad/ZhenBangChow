import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

// Connect to MongoDB
connectDB();

// Middleware to parse JSON bodies
app.use(express.json());

// Mount the user routes
app.use('/api/users', userRoutes);

// Basic route to test server
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Server listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
