import Update from './Circleupate.js';
import CircleCheck from './Circlecheck.js';
import * as baseResponse from'../config/baseResponse.js';
import {errResponse,response} from '../config/response.js';
class Control{
    process={
        find: async(req,res)=>{
            const Check=new CircleCheck;
            const CircleInfo=req.body;
            if(CircleInfo.name==null){
                if(CircleInfo.interest_id==null){
                    if(CircleInfo.area_id==null){
                         const circles=Check.findall;
                    }
                    else{
                        const circles= await Check.findbylocation(CircleInfo.location);
                    }
                }
                else{
                    if(CircleInfo.location==null){
                        const circles=Check.findbytype(CircleInfo.interest_id);
                    }
                    else{
                        const circles= await Check.findbylocation(CircleInfo.area_id);
                    }
                }
            }
            else{

            }
            if(CheckedCircle<1){
                return errResponse(baseResponse.CIRCLE_REDUNDANT);
            }
            return res.send(CheckedCirle);
        },

        make: async(req,res)=>{

        }

    }

}