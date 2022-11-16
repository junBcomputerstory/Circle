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
            console.log(circles);
            return res.send(circles);
        },

        make: async(req,res,next)=>{
            const CircleInfo=req.body;
            const image=req.file.location;
            re=await CircleUpdate.insertcircle(CircleInfo,image);
            return res.send(re);
        },

        page: async(req,res)=>{
            const Circleid=req.param.circle_id;
            const circlerow=CircleCheck.idcheck(Circleid);

            return circlerow;
        },

        addpicture: async(req,res)=>{
            const Circleid=req.param.circle_id;

        },

        circleimage: async(req,res)=>{
            const id=CircleCheck.getnewcircleid;
            const image=req.file.location;
        }
    } 
}
export default new Control();