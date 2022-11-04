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
        this.router.post('user/login',Usercontrol.process.login);
        this.router.post('user/signin',Usercontrol.process.signin);
        this.router.get('user/mypage',Usercontrol.process.mypage);
        this.router.post('user/mypage',Usercontrol.process.edituser);
    };
    }


export default new Router().router;