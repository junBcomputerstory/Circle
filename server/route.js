import express from 'express';
import userrouting from './User/Userroute.js'
import circlerouting from './Circle/Circleroute.js'

async function routing(){
    const app=express();
    app.use('/user',userrouting);
    app.use('/circle',circlerouting);
}

export {routing}
