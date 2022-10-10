const {logger}=require("../config/winston");
const {pool}=require("../config/mysql");
const Usercheck=require("./Usercheck");
const userDao=require("./userDao");
const baseResponse=require("../config/baseResponse");
const crypto=require("crypto");
const connet=require("http2");
const { response } = require("express");
const {response} = require("../../../config/response");
const {errResponse} = require("../../../config/response");
//회원 생성
exports.createUser=async function(ID,PW,nickname,interest){
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
exports.Postlogin=async function(UserInfo){
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
exports.editUser=async function(ID,newnickname){
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