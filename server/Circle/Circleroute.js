import express from'express';
import Control from './CircleControl.js';

class Circleroute{
    constructor(){
        this.router=express.Router();
        this.setrouter();
    }
    setrouter(){
        this.router.get('/circle',Control.process.find);
        this.router.post('/circle',Control.process.make);
        this.router.get('/circle/:circle_id',Control.process.page);

    }
}

export default new Circleroute().router;