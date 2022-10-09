import express from 'express';
import cookieParser from'cookie-parser';
import dotenv from 'dotenv';
dotenv.config();

class App{
    constructor(){
        this.app=express();
        this.setMiddleware();
        this.listen();
    }
    setMiddleware(){
        this.app.use(express.json());
        this.app.use(cookieParser());
    }
    listen(){
        this.app.listen(process.env.SERVER_PORT,()=>{
            console.log(`Server is running on ${process.env.SERVER_PORT}`)
        });
    }
}

export default new App().app;
