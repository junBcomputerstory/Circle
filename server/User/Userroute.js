import express from 'express';
import Usercontrol from './Usercontrol.js';


class Userroute{
    constructor(){
        this.router=express.Router();
        this.setRouter();
    }
    setRouter(){
        this.router.post('/login',Usercontrol.process.login);
        this.router.post('/signin',Usercontrol.process.signin);
        this.router.get('/mypage',Usercontrol.process.mypage);
        this.router.put('/mypage',Usercontrol.process.edituser);
    };
    }


export default new Userroute().router;