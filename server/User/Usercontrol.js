import Usercheck from'./Usercheck.js';
import Userupdate from'./Userupdate.js';

class control{
    process={
        login: async(req,res)=>{
            const {ID,PW}=req.body;
            const userInfo={ID:ID,PW:PW};
            const UserLogin = await Userupdate.Postlogin(userInfo);
            if(UserLogin.isSUCCESS==true){
                req.session.ID=userInfo.ID;
            }
            return res.send(UserLogin);
        },
        Signin: async(req,res)=>{
            const {ID,PW,nickname,interest}=req.body;
            const userInfo={ID:ID,PW:PW,nickname:nickname,interest:interest};
            const User=new Userupdate.createUser(userInfo);

            return res.send(User);
        },
        Mypage: async(req,res)=>{
            const session=req.session.user;
            if(!req.session.ID){
                console.log(`로그인을 먼저해주세요`);
                res.redirect(`/Login`);
            }
            else{
                const User=new Usercheck.retrieveUserpage(req.session.ID);
                return res.send(User);
            }
            
            
        }


    }
}
export default new control();
