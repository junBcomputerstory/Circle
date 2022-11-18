import express from 'express';
import cookieParser from'cookie-parser';
import dotenv from 'dotenv';
import cors from'cors';
import session from'express-session';
import routing from'./route.js';
dotenv.config();

class App{
    constructor(){
        this.app=express();
        this.setMiddleware();
        this.listen();
        this.setRouting();
    }
    setMiddleware(){
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:true}));
        this.app.use(cookieParser());
        this.app.use(session({
            HttpOnly:true,
            secure:true,
            secret:process.env.SECRET,
            resave:false,
            saveUninitialized:false,
        }));
    }
    setRouting(){
        this.app.use('/',routing);
        /*
        const corsOptions = {
            origin: "http://localhost:3000/"
        }
        this.app.use(cors(corsOptions)); 
        */
    };
    listen(){
        this.app.listen(process.env.SERVER_PORT,()=>{
            console.log(`Server is running on ${process.env.SERVER_PORT}`)
        })
    }
    }

export default new App().app;
