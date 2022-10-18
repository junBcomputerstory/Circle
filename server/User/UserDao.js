//유저 정보 조회
class userDao{
  //아이디를통한 유저정보 조회
  async selectUserpage(connection,ID){
    console.log(ID);
      const selectUserIDQuery=`SELECT * FROM User WHERE email = ?;`;
      const infoRows=await connection.query(selectUserIDQuery,ID);
      return infoRows;
  }
  
//ID로 비밀번호확인
async selectUserID(connection,ID){
  console.log(ID);
    const selectUserIDQuery=`SELECT email,password FROM User WHERE email = ?;`;
    const [IDRows]=await connection.query(selectUserIDQuery,ID);
    return IDRows;
}
//유저 생성
async insertUserInfo (connection,ID,hashedPW,usernickname) {
  try{
      const insertUserInfoQuery = 'INSERT INTO User (email , password, nickname) VALUES (?,?,?);';
      const value=[ID,hashedPW,usernickname]
      connection.query(
        insertUserInfoQuery,
        value
      );
      return (ID);
    }
  catch(err){
    console.log(err);
    return(0);
    }
  }
  //비밀번호 확인
async selectUserPassword(connection,ID,PW) {
    const selectUserPasswordQuery = 'SELECT password FROM User WHERE email = ? and password =?;';
    const selectUserPassword = await connection.query(
        selectUserPasswordQuery,
        [ID,PW]
    );
  
    return selectUserPassword;
  }
  //유저정보 업데이트
  async updateUserInfo (connection,ID,newnickname){
    try{
      const updateUserInfoQuery=`
          UPDATE User
          SET nickname=?
          WHERE ID=?; 
      `;
      await connection.query(
        updateUserInfoQuery,
        [newnickname, ID]
      );
      return(1);
    }
    catch(err){
      console.log(err);
      return(0);
    }
  }
  async user_id(connection,email){
    try{
      const useridquery=`
          SELECT id
          FROM User
          WHERE email=?;`;
      const user_id=await connection.query(
        useridquery,
        email
      );
      return user_id;
    }
    catch(err){
      console.log(err);
    }
  }
  async insertinterest(connection,id,interest){
    try{
      const insertquery=`INSERT INTO Interest(user_id,interest_id) VALUES(?,?);`;
      await connection.query(
        insertquery,
        id,
        interest
      );
    }
    catch(err){
      console.log(err);
    }
  }
}
export default userDao;


