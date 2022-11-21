import CircleUpdate from './Circleupdate.js';
import CircleCheck from './Circlecheck.js';
import * as baseResponse from'../config/baseResponse.js';
import {errResponse,response} from '../config/response.js';
import Circlecheck from './Circlecheck.js';
import Userupdate from '../User/Userupdate.js'
class Control{
    process={
        find: async(req,res)=>{
            const CircleInfo=req.query;
            const circles=await CircleCheck.findcircle(CircleInfo);
            return res.send(circles);
        },

        make: async(req,res)=>{
            const CircleInfo=req.body;
            const image=req.file.location;
            const user_id=req.session.user.email;
            const re=await CircleUpdate.insertcircle(CircleInfo,image,user_id);
            const circle_id=await Circlecheck.getnewcircleid();
            const result=await Userupdate.updatecircle(user_id,circle_id[0].id);
            return res.send(result);
        },

        page: async(req,res,next)=>{
            const Circleid=req.param.circle_id;
            const circlerow=await Circlecheck.idcheck(Circleid);
            req.circleinfo=circlerow;
            const pictures=await CircleCheck.getgallery(Circleid);
            req.circlegallery=pictures;
            next();
        },

        showgallery: async(req,res)=>{
            const circleid=req.params.circle_id;
            console.log(circleid);
            const re=await CircleCheck.getgallery(circleid);

            return res.send(re);
        },

        addgallery: async(req,res)=>{
            const Circleid=req.params.circle_id;
            console.log(Circleid);
            const re=await CircleUpdate.insertpicture(Circleid,image);
            res.send(re);
        },

        calender: async(req,res)=>{
            const circleid=req.params.circle_id;
            console.log(circleid);
            const list=await CircleCheck.getcalender(circleid);
            let result=new Object();
            result.schedule=list;
            result.circleinfo=req.circleinfo;
            result.picture=req.circlegallery;

            res.send(result);
        }
    } 
}
export default new Control();