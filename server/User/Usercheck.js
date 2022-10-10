const {logger}=require("../config/winston");
const {pool}=require("../config/mysql");
const userDao=require("./UserDao");


exports.IDcheck = async function(ID){
    const connection= await pool.getConnection(async(conn)=>conn);
    const result= await userDao.selectUserID(connection,ID);
    connection.release();

    return result;
};
exports.PWcheck = async function (ID) {
    const connection = await pool.getConnection(async (conn) => conn);
    const passwordCheckResult = await userDao.selectUserPassword(
        connection,
        ID
    );
    connection.release();
    return passwordCheckResult[0];
  };

exports.retrieveUserInfo = async function(ID){
    const connection= await pool.getConnection(async (conn)=>conn);
    const UserInfoResult = await userDao.selectUserID(ID);
    connection.release();

    return UserInfoResult;
}

exports.retrieveUserpage = async function(ID){
    const connection= await pool.getConnection(async(conn)=>conn);
    const Userpageresult= await userDao.selectUser(connection,ID);
    connection.release();

    return Userpageresult
    
}