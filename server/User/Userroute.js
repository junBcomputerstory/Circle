import express from 'express';
import Usercontrol from './Usercontrol.js';
import cors from'cors';

class Router{
    constructor(){
        this.app=express();
        this.router=express.Router();
        this.setRouter();
        this.app.use(cors);
    }
    setRouter(){
        this.router.post('/login',Usercontrol.process.login);
        this.router.post('/signin',cors(),Usercontrol.process.signin);
        this.router.get('/mypage',Usercontrol.process.mypage);
    };
    }


export default new Router().router;