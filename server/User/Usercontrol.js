import Update from './Userupdate.js';
import Check from './Usercheck.js';

class control {
  process = {
    login: async (req, res) => {
      const update = new Update();
      const userInfo = req.body;
      const UserLogin = await update.Postlogin(userInfo);
      if (UserLogin.isSuccess == true) {
        req.session.email = userInfo.email;
      }
      return res.send(UserLogin);
    },
    signin: async (req, res) => {
      const update = new Update();
      const userInfo = [req.body.email, req.body.password, req.body.nickname];
      const userinterest = req.body.interest;
      const User = await update.createUser(userInfo, userinterest);

      return res.send(User);
    },
    mypage: async (req, res) => {
      const Usercheck = new Check();
      if (!req.session.email) {
        console.log(`로그인을 먼저해주세요`);
        res.redirect(`/Login`);
      } else {
        console.log(req.session.email);
        const User = await Usercheck.retrieveUserpage(req.session.email);
        return res.send(User);
      }
    },
  };
}
export default new control();
