import './env.js';
import 'colors';
import path from 'path';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import connectDB from './configs/connectDB.js';
import { errorHandler, notFound } from './middlewares/error.js';

// Connect MongoDB
connectDB();

const app = express();

// Port
const port = process.env.PORT || 5000;

// Bypass cors
app.use(cors());

// Enable morgan
if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('tiny'));
}

app.use(express.json());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);
// Routes

// app.use('/api/users', userRoutes);

// Error Handler
app.use(notFound);
app.use(errorHandler);

// Log Server Connection
app.listen(port, () =>
  console.log(`Server running on port: ${port}`.yellow.bold)
);
