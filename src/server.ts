import express from 'express';
import { router } from './routes';
import audit from 'express';
import cors from 'cors';
import { cronTask } from './utils/cron';

const app = express();

cronTask.start();

app.use(express.json());
app.use(router);
app.use(audit());
app.use(cors({
  origin: ['*']
}));

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log(`server running on http://localhost:${PORT}`));
