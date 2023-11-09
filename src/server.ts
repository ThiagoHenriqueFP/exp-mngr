import express from 'express';
import audit from 'express';
import cors from 'cors';
import config from './config/envVariables';
import { router } from './routes';
import { cronTask } from './utils/cron';

const app = express();

cronTask.start();

app.use(express.json());
app.use(router);
app.use(audit());
app.use(cors({
  origin: ['*']
}));

const PORT = config.port || 3333;
app.listen(PORT, () => console.log(`server running on http://localhost:${PORT}`));
