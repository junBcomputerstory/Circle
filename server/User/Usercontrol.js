import express from 'express';
import Update from './Userupdate.js';
import Check from './Usercheck.js';
import {errResponse,response} from '../config/response.js';
import * as baseResponse from '../config/baseResponse.js'

class control {
  constructor(){
    this.app=express();
  }
  process = {
    login: async (req, res) => {
      if(req.body.password==null)
            res.send(errResponse(baseResponse.SIGNIN_PW_EMPTY));
      if(req.body.email==null)
            res.send(errResponse(baseResponse.SIGNIN_ID_EMPTY));
      const userInfo = req.body;
      const UserLogin = await Update.Postlogin(userInfo);
      if (UserLogin.isSuccess == true) {
        const usernickname= await Check.nicknamecheck(userInfo.email);
        req.session.user = {
            email: userInfo.email,
            nickname: usernickname.nickname,
        };
      }
      return res.send(UserLogin,{nickname: usernickname.nickname});
    },
    signin: async (req, res) => {
      const userInfo = [req.body.email, req.body.password, req.body.nickname];
      const userinterest = req.body.interest;
      const User = await Update.createUser(userInfo, userinterest);

      return res.send(User);
    },
    mypage: async (req, res) => {
      const Usercheck = new Check();
      if (!req.session.email) {
        console.log(`로그인을 먼저해주세요`);
        return res.redirect(`user/login`);
      } else {
        console.log(req.session.email);
        const User = await Usercheck.retrieveUserpage(req.session.email);
        return res.send(User);
      }
    },
    edituser: async (req, res)=> {
      const User = await Update.editUser(req.body,req.session.email);
      return res.send(User);
    },
  };
}
export default new control();
