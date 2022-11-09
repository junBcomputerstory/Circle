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
        const badgeresult= this.badgecheck(connection,Userpageresult.badge_id);
        const attendresult=this.attendcheck(connection,ID);
        const circleresult=Circlecheck.findcircle()
        connection.release();
        const re=[Userpageresult.nickname,Userpageresult.circle,Userpageresult.image_url,badgeresult,attendresult];

        return
    }
    async badgecheck(badge_id){
        const badge=parseInt(row.split(','));
        const connection=await pool.getConnection(async(conn)=>conn);
        const re=await userDao.selectbadge(connection,badge);

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
        const date=today.getFullYear()+'-'+month+'-'+day;
        const attendstring=attendday.date+","+date;
        Update.updateattend(user_id,attendstring);

        return attendstring;
    }
    
    async nicknamecheck(ID){
        const connection=await pool.getConnection(async(conn)=>conn);
        const usernickname=await userDao.getnickname(connection,ID);
        console.log(usernickname[0]);


        return usernickname[0];
    }
}

export default new Usercheck;