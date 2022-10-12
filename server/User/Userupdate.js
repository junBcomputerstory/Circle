import {logger} from ("../config/winston.js");
import {pool} from("../config/mysql.js");
import Usercheck from("./Usercheck");
import userDao from("./userDao");
import baseResponse from("../config/baseResponse");
import crypto from("crypto");
import connect from("http2");
import {response} from("../../../config/response");
import {errResponse} from("../../../config/response");
//회원 생성
class Update{
    async createUser(ID,PW,nickname,interest){
        try{
            const IDrow= await Usercheck.IDcheck(ID);
            if(IDrow.length>0)
                return errResponse(baseResponse.SIGNUP_REDUNDANT_EMAIL)
            const hashedPW=await crypto
                .createHash("sha512")
                .update(PW)
                .digest("hex")
        
            const insertUserparam=[ID,hashedPW,nickname,interest];
            const connection=await pool.getConnection(async (conn)=>conn);

            const userIDresult=await userDao.insertUserInfo(connection, insertUserparam);
            console.log(`추가된 회원:${userIDresult[0].ID}`);
            connection.release();
            return response(baseResponse.SUCCESS);
        }
        catch(err){
            logger.error(`App-createUser Service error\n:${err.message}`);
            return errResponse(baseResponse.DB_ERROR);
        }
    };
    async Postlogin(UserInfo){
        try{
            const IDrow=await Usercheck.IDcheck(UserInfo.ID);
            if(IDrow<1)
                return errResponse(baseResponse.USER_STATUS_EMPTY);
            const selectedID=IDrow[0].ID;
            const hashedPW= await crypto
                .createHash("sha512")
                .update(UserInfo.PW)
                .digest("hex");
        
            const PWRows=await Usercheck.PWcheck(selectedID);

            if(PWRows.PW!==hashedPW){
                return errResponse(baseResponse.SIGNIN_PASSWORD_WRONG);
            }
            return response(baseResponse.SUCCESS);

        }
        catch(err){
            logger.error(`APP-postlogin service error: \n ${err.message}`);
            return errResponse(baseResponse.DB_ERROR);
        }
    };
//회원 정보변경
    async editUser(ID,newnickname){
        try{
            console.log(ID);
            const IDrow=await Usercheck.IDcheck(UserInfo.ID);
            if(IDrow<1)
                return errResponse(baseResponse.USER_STATUS_EMPTY);
            const connection= await pool.getConnection(async (conn)=>conn);
            await userDao.updateUserInfo(connection,ID,newnickname);
            connection.release();

            return response(baseResponse.SUCCESS);
        }
        catch(err){
            logger.error(`APP- EditUser service error:\n ${err.message}`);
            return errResponse(baseResponse.DB_ERROR);
        }
    }
}
export default Update;