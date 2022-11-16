import CircleUpdate from './Circleupdate.js';
import CircleCheck from './Circlecheck.js';
import * as baseResponse from'../config/baseResponse.js';
import {errResponse,response} from '../config/response.js';
import Circlecheck from './Circlecheck.js';
class Control{
    process={
        find: async(req,res)=>{
            const CircleInfo=req.query;
            const circles=await CircleCheck.findcircle(CircleInfo);
            return res.send(circles);
        },

        make: async(req,res,next)=>{
            const CircleInfo=req.body;
            const re=await CircleUpdate.insertcircle(CircleInfo);
            const circle=await CircleCheck.getnewcircleid();
            req.body.circle_id=circle[0].id;

            return next();
        },

        page: async(req,res)=>{
            const Circleid=req.param.circle_id;
            const circlerow=Circlecheck.idcheck(Circleid);

            return res.send(circlerow);
        },

        addpicture: async(req,res)=>{
            const Circleid=req.body.circle_id;
            console.log(Circleid);
            const image=req.file.location;
            const re=await CircleUpdate.insertpicture(Circleid,image);

            res.send(re);
        }
    } 
}
export default new Control();