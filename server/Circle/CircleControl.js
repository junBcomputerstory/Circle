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
            const Circleid=req.param.circle_id;
            let result=new Object();
            const circlerow=await Circlecheck.idcheck(Circleid);
            const pictures=await CircleCheck.getgallery(Circleid);
            const todo=await CircleCheck.getcalender(Circleid);
            
            result.circleinfo=circlerow;
            result.circlepicture=pictures;
            result.calender=todo;

            res.send(result);
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

        boardlist: async(req,res)=>{
            const circleid=req.params.circle_id;
            console.log(circleid);
            const re=await Circlecheck.checkboard(circleid);
            let user=new Object();
            for(let i=0;i<re.length;i++){
                user[i].user_id=re[i].user_id;
            }
            const username=await Usercheck.getnickname(user);
        },

        join: async(req,res)=>{
            const circle_id=req.parms.circle_id;
            const user_id=req.session.email;
            const re=await Userupdate.updatecircle(user_id,circle_id);

        }
    } 
}
export default new Control();