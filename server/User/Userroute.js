import express from 'express';
import Usercontrol from './Usercontrol.js';

class Router{
    constructor(){
        this.router=express.Router();
        this.setRouter();
    }
    setRouter(){
        this.router.post('/Login',Usercontrol.process.login);
        this.router.post('/Signin',Usercontrol.process.Signin);
        this.router.get('/Mypage',Usercontrol.process.Mypage);
    }
}

export default new Router().router;