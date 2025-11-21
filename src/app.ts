import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';

const app = express();

app.use(cors());
app.use(morgan('combined'));
app.use(helmet());
app.use(express.json());

app.use((req: Request, res: Response, next: NextFunction)=>{
    res.status(200).send({message: 'Hello World!'});
})

export default app;