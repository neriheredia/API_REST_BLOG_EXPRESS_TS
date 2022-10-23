import express, { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { router } from './routes/v1';
import { corsOptions } from './settings/cors/corsOptions';

export const app: Application = express();

dotenv.config();

app.use(cors(corsOptions));

app.use(express.json());

app.use('/api/v1/', router);
