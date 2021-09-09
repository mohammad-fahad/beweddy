// Config DotEnv
import './env.js';

import 'colors';
import path from 'path';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import { errorHandler, notFound } from './middlewares/error.js';
import connectDB from './configs/db.js';
import guestRoutes from './routes/guestRoutes.js';
import userRoutes from './routes/userRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
import sendRoutes from './routes/sendRoutes.js';
import RegistryRoutes from './routes/registryRoutes.js';

// Connect MongoDB
connectDB();

const app = express();
// Port
const port = process.env.PORT || 5000;
// API URL
const API_VERSION = process.env.API_VERSION || '/api/v1';
// Bypass cors
app.use(cors());

// const __dirname = path.resolve();

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '/client/build')));
//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//   });
// }

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

// Routes
app.get('/', (_req, res) => {
  res.json({ message: 'Welcome to Beweddy.' });
});

app.use(`${API_VERSION}/users`, userRoutes);
app.use(`${API_VERSION}/upload`, uploadRoutes);
app.use(`${API_VERSION}/guests`, guestRoutes);

app.use(`${API_VERSION}/gifts`, userRoutes);
// app.use(`${API_VERSION}/registries`, userRoutes);
app.use(`${API_VERSION}/registries`, RegistryRoutes);
app.use(`${API_VERSION}/send`, sendRoutes);

// Error Handler
app.use(notFound);
app.use(errorHandler);

// Log Server Connection
app.listen(port, () =>
  console.log(`Server running on port: ${port}`.yellow.bold)
);
