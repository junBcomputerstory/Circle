import CircleUpdate from './Circleupdate.js';
import CircleCheck from './Circlecheck.js';
import * as baseResponse from'../config/baseResponse.js';
import {errResponse,response} from '../config/response.js';
import Circlecheck from './Circlecheck.js';
class Control{
    process={
        find: async(req,res)=>{
            const CircleInfo=req.body;
            console.log(req.params);
            const circles=await CircleCheck.findcircle(CircleInfo);
            if(circles<1){
                return errResponse(baseResponse.CIRCLE_NOTFOUND);
            }
            return res.send(circles);
        },

        make: async(req,res,next)=>{
            const CircleInfo=req.body;
            await CircleUpdate.insertcircle(CircleInfo);
            next();
        },

        page: async(req,res)=>{
            const Circleid=req.param.circle_id;
            const circlerow=CircleCheck.idcheck(Circleid);

            return circlerow;
        },

        addpicture: async(req,res)=>{
            const Circleid=req.param.circle_id;

        }
    } 
}
export default new Control();