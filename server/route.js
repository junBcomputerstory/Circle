import express from 'express';
import Userroute from './User/Userroute.js'
import Circleroute  from './Circle/Circleroute.js'

class routing{
    constructor(){
        this.router=express.Router();
        this.setRouter();
    }
    setRouter(){
        this.router.use('/user',Userroute);
        this.router.use('/circle',Circleroute);
    }
}

export default new routing().router;
