import express from 'express';
import Userroute from './User/Userroute.js'
import Circleroute  from './Circle/Circleroute.js'

async function routing(){
    const app=express();
    app.use('/user',Userroute);
    app.use('/circle',Circleroute);
}

export {routing}
