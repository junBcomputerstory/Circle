import Update from './Circleupate.js';
import Check from './Circlecheck.js';
import * as baseResponse from'../config/baseResponse.js';
import {errResponse,response} from '../config/response.js';
class Control{
    process={
        FindCircle: async(req,res)=>{
            const Circlecheck=new Check;
            const CircleInfo=req.body;
            const CheckedCircle=Check.find(CircleInfo);
            if(CheckedCircle<1){
                return errResponse(baseResponse.CIRCLE_REDUNDANT);
            }
            return res.send(UserLogin);
        },

        MakeCircle: async(req,res)=>{

        }

    }

}