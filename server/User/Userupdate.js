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
        try{
            const User=new Usercheck();
            const Dao=new userDao();
            const IDrow= await User.IDcheck(userInfo.email);
            if(IDrow.length>0)
                return errResponse(baseResponse.SIGNUP_REDUNDANT_ID)
            const hashedPW=crypto
                .createHash("sha512")
                .update(userInfo.password)
                .digest("hex")
        
            const connection=await pool.getConnection(async (conn)=>conn);
            const re=await Dao.insertUserInfo(connection,userInfo.email,hashedPW,userInfo.nickname);
            const i=0;
            if(re==userInfo.email){
                console.log('email,pw는 가입완료');
                const id=Dao.user_id(re);
                for(i;i<userInt.length;i++){
                    Dao.insertinterest(connection,id,userInt[i]);
                }
            }
            else{
                return errResponse(baseResponse.SERVER_ERROR);
            }
            connection.release();
            return response(baseResponse.SUCCESS);
        }
        catch(err){
            console.log(err);
            conection.release();
            return errResponse(baseResponse.DB_ERROR);
        }
    };
    async Postlogin(UserInfo){
        try{
            const IDrow=await Usercheck.IDcheck(UserInfo.ID);
            if(IDrow<1)
                return errResponse(baseResponse.USER_STATUS_EMPTY);
            const selectedID=IDrow.ID;
            const hashedPW= crypto
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
            console.log(err);
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
            return errResponse(baseResponse.DB_ERROR);
        }
    }
}
export default Update;