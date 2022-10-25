import Update from './Circleupate.js';
import CircleCheck from './Circlecheck.js';
import * as baseResponse from'../config/baseResponse.js';
import {errResponse,response} from '../config/response.js';
class Control{
    process={
        find: async(req,res)=>{
            const Check=new CircleCheck;
            const CircleInfo=req.body;
            const circles=Check.findcircle(CircleInfo);
            if(circles<1){
                return errResponse(baseResponse.CIRCLE_NOTFOUND);
            }
            return res.send(circles);
        },

        make: async(req,res)=>{

        }

    }

}
export default new Control();