import CircleUpdate from './Circleupdate.js';
import CircleCheck from './Circlecheck.js';
import Circlecheck from './Circlecheck.js';
import Userupdate from '../User/Userupdate.js'
import Usercheck from '../User/Usercheck.js';
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

        page: async(req,res)=>{
            const Circleid=parseInt(req.params.circle_id);
            let result=new Object();
            const circlerow=await Circlecheck.idcheck(Circleid);
            const pictures=await CircleCheck.getgallery(Circleid);
            const todo=await CircleCheck.getcalender(Circleid);
            const board=await CircleCheck.checkboard(Circleid);
            result.circleinfo=circlerow;
            result.circlepicture=pictures;
            result.calender=todo;
            result.board=board;

            res.send(result);
        },

        addgallery: async(req,res)=>{
            const Circleid=parseInt(req.params.circle_id);
            const image=req.file.location;
            const re=await CircleUpdate.insertpicture(Circleid,image);
            res.send(re);
        },

        writeboard: async(req,res)=>{
            const circleid=parseInt(req.params.circle_id);
            const today = new Date();
            const year = today.getFullYear();
            const month = ('0' + (today.getMonth() + 1)).slice(-2);
            const day = ('0' + today.getDate()).slice(-2);
            const dateString = year + '-' + month  + '-' + day;
            console.log(circleid);
            const data=[req.body.circle_id,req.body.title,req.body.content,req.session.user.nickname,dateString];
            const re=await CircleUpdate.insertboard(data);
        },

        join: async(req,res)=>{
            const circle_id=parseInt(req.parms.circle_id);
            const user_id=req.session.email;
            const re=await Userupdate.updatecircle(user_id,circle_id);

        }
    } 
}
export default new Control();