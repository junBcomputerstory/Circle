import Update from './Circleupate.js';
import Check from './Circlecheck.js';
import * as baseResponse from'../config/baseResponse.js';
import {errResponse,response} from '../config/response.js';
class Control{
    process={
        FindCircle: async(req,res)=>{
            const Circlecheck=new Check;
            const CircleInfo=req.body;
            if(CircleInfo.ID==null){
                if(CircleInfo.category==null){
                    if(CircleInfo.location==null){
                        return errResponse(baseResponse.CIRCLE_REDUNDANT); 
                    }
                    else{

                    }
                }
                else{
                    if(CircleInfo.category==null){
                        if(CircleInfo.location==null){
    
                        }
                        else{
    
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

        MakeCircle: async(req,res)=>{

        }

    }

}