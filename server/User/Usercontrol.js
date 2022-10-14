import Update from'./Userupdate.js';
import Check from'./Usercheck.js';

class control{
    process={
        login: async(req,res)=>{
            const update=new Update();
            const {ID,PW}=req.body;
            const userInfo={ID:ID,PW:PW};
            const UserLogin = await update.Postlogin(userInfo);
            if(UserLogin.isSuccess==true){
                req.session.ID=userInfo.ID;
            }
            return res.send(UserLogin);
        },
        signin: async(req,res)=>{
            const update=new Update();
            const userInfo=[req.body.email,req.body.password];
            const userinterest=req.body.interest;
            console.log(userInfo);
            const User=await update.createUser(userInfo,userinterest);

            return res.send(User);
        },
        mypage: async(req,res)=>{
            const Usercheck=new Check();
            const session=req.session.user;
            if(!req.session.ID){
                console.log(`로그인을 먼저해주세요`);
                res.redirect(`/Login`);
            }
            else{
                const User=await Usercheck.retrieveUserpage(req.session.ID);
                return res.send(User);
            }
            
            
        }


    }
}
export default new control();
