import express, { Application } from 'express';
import index from './routes/index';

const app: Application = express();

app.use('/', index);

app.listen(5000, () => console.log('Server is Running'));
