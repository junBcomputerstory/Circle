import express from'express';
import Control from './CircleControl.js';
import { circleimageupload, galleryupload  } from '../config/profileupload.js';
import multer from 'multer';

class Circleroute{
    constructor(){
        this.router=express.Router();
        this.setrouter();

    }
    setrouter(){
        this.router.get('/find',Control.process.find);
        this.router.post('/make',circleimageupload.single('image'),Control.process.make);
        this.router.get('/:circle_id',Control.process.page);
        this.router.post('/:circle_id/gallery',galleryupload.single('image'),Control.process.addgallery);
        this.router.post('/:circle_id/join',Control.process.join);
        this.router.post('/:circle_id/board',Control.process.writeboard);
        //this.router.get('/:circleid/board/:board_id',Control.process.getboard);

    }
}

export default new Circleroute().router;