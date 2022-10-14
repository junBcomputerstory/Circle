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
        this.router.post('/Login',Usercontrol.process.login);
        this.router.post('/Signin',cors(),(req,res)=>{res.writeHead(200, { 'Access-Control-Allow-Origin': '*' })},Usercontrol.process.Signin);
        this.router.get('/Mypage',Usercontrol.process.Mypage);
    };
    }


export default new Router().router;