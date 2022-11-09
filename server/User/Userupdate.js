import {pool} from '../config/mysql.js';
import Usercheck from './Usercheck.js';
import userDao from './userDao.js';
import * as baseResponse from'../config/baseResponse.js';
import crypto from 'crypto';
import connect from 'http2';
import {errResponse,response} from '../config/response.js';
//회원 생성
class Update{
    async createUser(userInfo,userInt){
        const connection=await pool.getConnection(async (conn)=>conn);
        try{
            
            const IDrow= await Usercheck.IDcheck(userInfo[0]);
            if(IDrow.length<1)
                return errResponse(baseResponse.SIGNUP_REDUNDANT_ID);
            const hashedPW=crypto
                .createHash("sha512")
                .update(userInfo[1])
                .digest("hex")
            await connection.beginTransaction();
            const interest=userInt.toString();
            const result=await userDao.insertUserInfo(connection,userInfo[0],hashedPW,userInfo[2],interest);
            if(result==userInfo[0]){
                console.log('새로운 유저 가입완료');
                await connection.commit();
            }
            else{
                return errResponse(baseResponse.SERVER_ERROR);
            }
        }
        catch(err){
            console.log(err);
            return errResponse(baseResponse.DB_ERROR);
        }
        finally{
            connection.release();
            return response(baseResponse.SUCCESS);
        }
    };
    async Postlogin(UserInfo){
        try{
            const IDrow=await Usercheck.IDcheck(UserInfo.email);
            console.log(IDrow.length);
            if(IDrow.length<1)
                return errResponse(baseResponse.SIGNIN_ID_WRONG);
            const hashedPW= crypto
                .createHash("sha512")
                .update(UserInfo.password)
                .digest("hex");
            const re=await Usercheck.PWcheck(UserInfo.email,hashedPW);
            if(re.length<1){
                return errResponse(baseResponse.SIGNIN_PASSWORD_WRONG);     
            }
            return response(baseResponse.SUCCESS);

        }
        catch(err){
            console.log(err);
            return errResponse(baseResponse.DB_ERROR);
        }
    };
//회원 정보변경
    async editUser(userinfo,email){
        try{
            const ver=[userinfo.nickname,userinfo.image,email];
            const connection= await pool.getConnection(async (conn)=>conn);
            await userDao.updateUserInfo(connection,ver);
            connection.release();

            return response(baseResponse.SUCCESS);
        }
        catch(err){
            console.log(err);
            return errResponse(baseResponse.DB_ERROR);
        }
    }
    async updateattend(user_id,attenddays){
        
    }
}
export default new Update;