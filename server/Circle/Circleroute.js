import express from'express';
import CircleControl from 'CircleControl.js';

class Router{
    constructor(){
        this.router=express.Router();
        this.setrouter();
    }
    setrouter(){
        this.router.get('/circle',CircleControl.process.find);
        this.router.post('/circle',CircleControl.process.make);

    }
}