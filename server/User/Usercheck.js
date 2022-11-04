import {pool} from '../config/mysql.js';
import userDao from './UserDao.js';

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
        const badgeresult= this.badgecheck(Userpageresult[4]);
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

    }
}

export default Usercheck;