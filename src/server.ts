import express from 'express';
import { router } from './routes/index';

const app = express();

app.use(express.json());
app.use(router);

app.listen(3333, () => console.log('listening on 3333'));
