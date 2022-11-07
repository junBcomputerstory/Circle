import {pool} from '../config/mysql.js';
import userDao from './UserDao.js';
import Update from './Userupdate.js';

class Usercheck{
    async IDcheck(ID){
        console.log(ID);
        const connection= await pool.getConnection(async(conn)=>conn);
        const result= await userDao.selectUserID(connection,ID);
        connection.release();
        return result;
    };
    async PWcheck(ID,hashedPW) {
        const connection = await pool.getConnection(async (conn) => conn);
        const passwordCheckResult = await userDao.selectUserPassword(connection,ID,hashedPW);
        connection.release();
        return passwordCheckResult;
    };

    async retrieveUserpage(ID){
        const connection= await pool.getConnection(async(conn)=>conn);
        const Userpageresult= await userDao.selectUserpage(connection,ID);
        const badgeresult= this.badgecheck(Userpageresult.badge_id);
        const attendresult=this.attendcheck(Userpageresult[0]);
        connection.release();

        return Userpageresult
    }
    async badgecheck(badge_id){
        const row=badge_id.substring(1,badge_id.length()-1);
        const badge=parseInt(row.split(','));
        const connection=await pool.getConnection(async(conn)=>conn);
        const re=await userDao.selectbadge(connection,badge);
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
}

export default Usercheck;