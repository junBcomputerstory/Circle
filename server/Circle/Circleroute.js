import express from'express';
import Control from './CircleControl.js';

class Router{
    constructor(){
        this.router=express.Router();
        this.setrouter();
    }
    setrouter(){
        this.router.get('/circle',Control.process.find);
        this.router.post('/circle',Control.process.make);

    }
}