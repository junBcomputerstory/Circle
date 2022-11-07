import CircleUpdate from './Circleupdate.js';
import CircleCheck from './Circlecheck.js';
import * as baseResponse from'../config/baseResponse.js';
import {errResponse,response} from '../config/response.js';
import Circlecheck from './Circlecheck.js';
class Control{
    process={
        find: async(req,res)=>{
            const CircleInfo=req.body;
            const circles=CircleCheck.findcircle(CircleInfo);
            if(circles<1){
                return errResponse(baseResponse.CIRCLE_NOTFOUND);
            }
            return res.send(circles);
        },

        make: async(req,res)=>{
            const CircleInfo=req.body;
            const re=CircleUpdate.insertcircle(CircleInfo);

        },

        page: async(req,res)=>{
            const Circleid=req.body.circle_id;
            const circlerow=CircleCheck.idcheck(Circleid);

            return circlerow;
        },
    } 
}
export default new Control();