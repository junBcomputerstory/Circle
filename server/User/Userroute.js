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
        const whitelist="http://localhost:3000";
        const corsOptions = {
            origin: function (origin, callback) { 
            if (whitelist.indexOf(origin) !== -1) { // 만일 whitelist 배열에 origin인자가 있을 경우
            callback(null, true); // cors 허용
            } else {
                 callback(new Error("Not Allowed Origin!")); // cors 비허용
            }
        }
    };
        this.app.use(cors(corsOptions));
    }
}

export default new Router().router;