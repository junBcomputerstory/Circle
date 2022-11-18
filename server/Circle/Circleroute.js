import express from'express';
import Control from './CircleControl.js';
import { circleimageupload } from '../config/profileupload.js';

class Circleroute{
    constructor(){
        this.router=express.Router();
        this.setrouter();
    }
    setrouter(){
        this.router.get('/find',Control.process.find);
        this.router.post('/make',circleimageupload.single('image'),Control.process.make,Control.process.addpicture);
        this.router.get('/:circle_id',Control.process.page);
        this.router.post('/:circle_id/gallery',Control.process.addpicture);
        this.router.get('/:circle_id/schedule',Control.process.page);

    }
}

export default new Circleroute().router;