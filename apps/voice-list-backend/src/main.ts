import * as express from 'express';
import { authRouter } from './routes/auth';

const app = express();
app.use(express.json());
app.use('/auth', authRouter)

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`);
});

server.on('error', console.error);
