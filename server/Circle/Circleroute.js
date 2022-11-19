import express from'express';
import Control from './CircleControl.js';
import { circleimageupload } from '../config/profileupload.js';
import multer from 'multer';

class Circleroute{
    constructor(){
        this.router=express.Router();
        this.setrouter();

    }
    setrouter(){
        this.router.get('/find',Control.process.find);
        this.router.post('/make',circleimageupload.single('image'),Control.process.make);
        this.router.get('/:circle_id',Control.process.page,Control.process.calender);
        this.router.get('/:circle_id/gallery',Control.process.showgallery);
        this.router.post('/:circle_id/gallery',Control.process.addgallery);
        this.router.get('/:circle_id/schedule',Control.process.page);

    }
}

export default new Circleroute().router;