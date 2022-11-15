import express from 'express';
import Usercontrol from './Usercontrol.js';
import {imageupload,imagedelete} from '../config/profileupload.js';


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
        this.router.post('/mypage/profile/:user_id',imagedelete,imageupload.single('image'),Usercontrol.process.Profileupdate);
        this.router.delete('/logout',Usercontrol.process.logout);
    };
    }


export default new Userroute().router;