//유저 정보 조회
class userDao{
  
//ID로 확인,조회
async selectUserID(connection,ID){
    const selectUserIDQuery='SELECT * FROM User WHERE ID=?;';
    const [IDRows]=await connection.query(selectUserIDQuery,ID);
    return IDRows;
}
//유저 생성
async insertUserInfo (connection,ID,hashedPW) {
  try{
    console.log(userInfo)
      const insertUserInfoQuery = 'INSERT INTO User (email , password) VALUES (?,?);';
      connection.query(
        insertUserInfoQuery,
        ID,
        hashedPW
      );
      return (ID);
    }
  catch(err){
    console.log(err);
    return(0);
    }
  }
  //비밀번호 확인
async selectUserPassword(connection,ID) {
    const selectUserPasswordQuery = 'SELECT (ID,PW,nickname) FROM User WHERE ID = ? ;';
    const selectUserPasswordRow = await connection.query(
        selectUserPasswordQuery,
        ID
    );
  
    return selectUserPasswordRow;
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
        newnickname,
        ID
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
      const insertquery=`
      INSERT 
      INTO Interest(user_id,interest_id)
      VALUES(?,?);`;
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


