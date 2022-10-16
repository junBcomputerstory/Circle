import express from 'express';
import Usercontrol from './Usercontrol.js';


class Router{
    constructor(){
        this.app=express();
        this.router=express.Router();
        this.setRouter();
    }
    setRouter(){
        this.router.post('/login',Usercontrol.process.login);
        this.router.post('/signin',Usercontrol.process.signin);
        this.router.get('/mypage',Usercontrol.process.mypage);
    };
    }


export default new Router().router;