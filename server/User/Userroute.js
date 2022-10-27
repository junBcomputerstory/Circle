import express from 'express';
import Usercontrol from './Usercontrol.js';
import mutler from '../config/mutler.js';


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
        this.router.post('/mypage',Usercontrol.process.edituser,);
    };
    }


export default new Router().router;