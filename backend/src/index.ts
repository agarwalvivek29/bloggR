import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import authRouter from './routes/auth';
import createRouter from './routes/create';
import blogRouter from './routes/blog';

const port = process.env.PORT

const app = express();

app.use(bodyParser.json());

app.use((err : any, req : Request, res : Response, next: NextFunction)=>{
    console.log(err);
    res.send({
        success : false,
        err
    })
})

app.use('/',blogRouter);
app.use('/auth',authRouter);
app.use('/create',createRouter);

app.listen(port, ()=>{
    console.log(`Server active on port ${port}`);
})