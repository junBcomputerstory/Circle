import {pool} from '../config/mysql.js';
import userDao from './UserDao.js';

class Usercheck{
    async IDcheck(ID){
        const Dao=new userDao;
        console.log(ID);
        const connection= await pool.getConnection(async(conn)=>conn);
        const result= await Dao.selectUserID(connection,ID);
        connection.release();
        return result;
    };
    async PWcheck(ID) {
        const Dao=new userDao;
        const connection = await pool.getConnection(async (conn) => conn);
        const passwordCheckResult = await Dao.selectUserPassword(
            connection,
            ID
        );
        connection.release();
        return passwordCheckResult[0];
    };

    async retrieveUserInfo(ID){
        const Dao=new userDao;
        const connection= await pool.getConnection(async (conn)=>conn);
        const UserInfoResult = await Dao.selectUserID(ID);
        connection.release();

        return UserInfoResult;
    }

    async retrieveUserpage(ID){
        const Dao=new userDao;
        const connection= await pool.getConnection(async(conn)=>conn);
        const Userpageresult= await Dao.selectUser(connection,ID);
        connection.release();

        return Userpageresult
    }
}

export default Usercheck;