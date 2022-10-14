import express from 'express';
import Usercontrol from './Usercontrol.js';
import cors from'cors';

class Router{
    constructor(){
        this.app=express();
        this.router=express.Router();
        this.setRouter();
    }
    setRouter(){
        this.router.post('/Login',Usercontrol.process.login);
        this.router.post('/Signin',Usercontrol.process.Signin);
        this.router.get('/Mypage',Usercontrol.process.Mypage);
        this.app.use(cors({
            origin: '*', 
            credential: 'true' 
        }));
    }
}

export default new Router().router;