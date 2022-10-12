//유저 정보 조회
class userDao{
  async selectUser(connection,ID){
    const selectUserinfoQuery="SELECT * FROM User WHERE ID=?;";
    const [userRows]= await connection.query(selectUserinfoQuery,ID);
    return userRows;
}
//ID로 확인,조회
async selectUserID(connection,ID){
    const selectUserIDQuery='SELECT * FROM User WHERE ID=?;';
    const [IDRows]=await connection.query(selectUserIDQuery,ID);
    return IDRows;
}
//유저 생성
async insertUserInfo (connection,userInfo) {
  try{
    console.log(userInfo)
    const value=[userInfo.ID,userInfo.PW,userInfo.nickname,userInfo.interest];
      const insertUserInfoQuery = 'INSERT INTO User (ID , PW , nickname , interest) VALUES (?,?,?,?);';
      connection.query(
        insertUserInfoQuery,
        value
      );
      return (1);
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
}
export default userDao;


