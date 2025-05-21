// server/src/index.ts
import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Health-check endpoint
app.get('/api/health', (req: Request, res: Response) => {
  res.send('✅ Server OK');
});

const mongoUrl = process.env.MONGO_URL!;
mongoose
  .connect(mongoUrl)
  .then(() => console.log('MongoDB connected 🚀'))
  .catch((err: any) => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT ?? 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
