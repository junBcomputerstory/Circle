//유저 정보 조회
class userDao{
  async selectUser(connection,ID){
    const selectUserinfoQuery="SELECT * FROM User WHERE ID=?;";
    const [userRows]= await connection.query(selectUserinfoQuery,ID);
    return userRows;
}
//ID로 확인,조회
async selectUserID(connection,ID){
    const selectUserIDQuery="SELECT * FROM User WHERE ?;";
    const [IDRows]=await connection.query(selectUserIDQuery,ID);
    return IDRows;
}
//유저 생성
async insertUserInfo (connection,ID,PW,nickname,interest) {
    const insertUserInfoQuery = "INSERT INTO User(ID,PW,nickname,interest) VALUES (?, ?, ?, ?);";
    const insertUserInfoRow = await connection.query(
      insertUserInfoQuery,ID,PW,nickname,interest

    );
  
    return insertUserInfoRow;
  }
  //비밀번호 확인
async selectUserPassword(connection,ID) {
    const selectUserPasswordQuery = "SELECT (ID,PW,nickname) FROM User WHERE ID = ? ;";
    const selectUserPasswordRow = await connection.query(
        selectUserPasswordQuery,
        ID
    );
  
    return selectUserPasswordRow;
  }
  //유저정보 업데이트
  async updateUserInfo (connection,ID,newnickname){
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
  }
}
export default userDao;


