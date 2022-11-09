import {pool} from '../config/mysql.js';
import userDao from './UserDao.js';
import Update from './Userupdate.js';
import Circlecheck from '../Circle/Circlecheck.js'
import UserDao from './UserDao.js';

class Usercheck{
    async IDcheck(ID){
        const connection= await pool.getConnection(async(conn)=>conn);
        const result= await userDao.selectUserID(connection,ID);
        connection.release();
        return result[0];
    };
    async PWcheck(ID,hashedPW) {
        const connection = await pool.getConnection(async (conn) => conn);
        const passwordCheckResult = await userDao.selectUserPassword(connection,ID,hashedPW);
        connection.release();
        return passwordCheckResult[0];
    };

    async retrieveUserpage(ID){
        const connection= await pool.getConnection(async(conn)=>conn);
        const Userpageresult= await userDao.selectUserpage(connection,ID);
        const attendresult=this.attendcheck(connection,ID);
        let re={  "nickname":Userpageresult[0][0].nickname,
                  "image":Userpageresult[0][0].image_url,
                };
        if(Userpageresult[0][0].badge_id.length!=0){
            const badgeresult= this.badgecheck(connection,Userpageresult[0][0].badge_id);
            re.badge=badgeresult[0];          
        }
        if(Userpageresult[0][0].circle.length!=0){
            let circleid=Userpageresult[0][0].circle.split(',');
            const circleresult=Circlecheck.userCircle(circleid);
            re.circle=circleresult[0];
        }
        connection.release();
        
        return re;
    }
    async badgecheck(badge_id){
        const badge=badge_id.split(',');
        for(let i=0;i<badge.length;i++)
            badge[i]*=1;
        const connection=await pool.getConnection(async(conn)=>conn);
        const re=await userDao.selectbadge(connection,badge);
        connection.release();

        return re;
    }
    async attendcheck(user_id){
        const connection=await pool.getConnection(async(conn)=>conn);
        const attendday=await userDao.getattendday(connection,user_id);
        const today=new Date();
        let month = today.getMonth() + 1;
        let day = today.getDate();   
        month = month >= 10 ? month : '0' + month;
        day = day >= 10 ? day : '0' + day;
        const attendarray=attendday[0][0].date.split(',');
        const date=today.getFullYear()+'-'+month+'-'+day;
        if(!attendarray.includes(date)){
            attendarray.add(date);
            attendstring=attendday[0][0].date+","+date;
            //Update.updateattend(user_id,attendstring);
        }
        return attendarray;
    }
    
    async nicknamecheck(ID){
        const connection=await pool.getConnection(async(conn)=>conn);
        const usernickname=await userDao.getnickname(connection,ID);
        console.log(usernickname[0]);
        return usernickname[0];
    }
}

export default new Usercheck;