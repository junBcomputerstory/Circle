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
        const user_id=Userpageresult[0][0].user_id;
        const interest=Userpageresult[0][0].interest_id.split(',');
        connection.release();
        //const attendresult=this.attendcheck(connection,user_id);
        let re={  "nickname":Userpageresult[0][0].nickname,
                  "image":Userpageresult[0][0].image_url,
                  "interest":interest,
                };
        if(Userpageresult[0][0].badge_id!=null){
            let badge_id=Userpageresult[0][0].badge_id.split(',');
            const badgeresult=await this.badgecheck(badge_id);
            re.badge=badgeresult;          
        }
        if(Userpageresult[0][0].circle!=null){
            let circleid=Userpageresult[0][0].circle.split(',');
            const circleresult=await Circlecheck.userCircle(circleid);
            re.circle=circleresult[0];
        }
        console.log(re);
        return re;
    }
    async badgecheck(badge_id){
        for(let i=0;i<badge_id.length;i++)
            badge_id[i]*=1;
        const connection=await pool.getConnection(async(conn)=>conn);
        const re=await userDao.selectbadge(connection,badge_id);
        connection.release();

        return re[0];
    }
    async attendcheck(user_id){
        const connection=await pool.getConnection(async(conn)=>conn);
        const attendday=await userDao.getattendday(connection,user_id);
        console.log(attendday[0]);
        const today=new Date();
        let month = today.getMonth() + 1;
        let day = today.getDate();   
        month = month >= 10 ? month : '0' + month;
        day = day >= 10 ? day : '0' + day;
        const attendarray=attendday[0].date.split(',');
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

    async profileimage(ID){
        const connection=await pool.getConnection(async(conn)=>conn);
        const image=await userDao.getimage(connection,ID);

        return image[0];
    }
}

export default new Usercheck;