import express from'express';
import CircleControl from 'CircleControl.js';

class Router{
    constructor(){
        this.router=express.Router();
        this.setrouter();
    }
    setrouter(){
        this.router.get('/FindCircle',CircleControl.process.Find);
        this.router.get('/MakeCircle',CircleControl.process.Make);

    }
}