import {pool} from '../config/mysql.js';
import userDao from './UserDao.js';

class Usercheck{
    async IDcheck(ID){
        console.log(ID);
        const Dao=new userDao;
        const connection= await pool.getConnection(async(conn)=>conn);
        const result= await Dao.selectUserID(connection,ID);
        connection.release();
        return result[0];
    };
    async PWcheck(ID,hashedPW) {
        const Dao=new userDao;
        const connection = await pool.getConnection(async (conn) => conn);
        const passwordCheckResult = await Dao.selectUserPassword(connection,ID,hashedPW);
        connection.release();
        return passwordCheckResult;
    };

    async retrieveUserpage(ID){
        const Dao=new userDao;
        const connection= await pool.getConnection(async(conn)=>conn);
        const Userpageresult= await Dao.selectUserpage(connection,ID);
        connection.release();

        return Userpageresult
    }
}

export default Usercheck;