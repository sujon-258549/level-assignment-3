import express, { Application, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';
import router from './app/Router/intdex';

app.use(express.json());
app.use(cors());
app.use('/api', router);
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
