import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import courseRoutes from './routes/courses.js';
import dotenv from 'dotenv';

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;


//Middleware
app.use(cors());
app.use(express.json());

//For Routes
app.use('/courses', courseRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})