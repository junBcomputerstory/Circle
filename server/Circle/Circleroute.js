import express from'express';
import Control from './CircleControl.js';

class Circleroute{
    constructor(){
        this.router=express.Router();
        this.setrouter();
    }
    setrouter(){
        this.router.get('/circle/find',Control.process.find);
        this.router.post('/circle/make',Control.process.make);
        this.router.get('/circle/:circle_id',Control.process.page);
        this.router.post('/circle/:circle_id/gallery',Control.process.addpicture);
        this.router.get('/circle/:circle_id/schedule',Control.process.page);

    }
}

export default new Circleroute().router;