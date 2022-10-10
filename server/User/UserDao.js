//유저 정보 조회
async function selectUser(connection,ID){
    const selectUserinfoQuery=`
                    SELECT *
                    FROM UserInfo
                    WHERE ID=?;
                    `;
    const [userRows]= await connection.query(selectUserinfoQuery,ID);
    return userRows;
}
//ID로 확인,조회
async function selectUserID(connection,ID){
    const selectUserIDQuery=`
                SELECT *
                FROM UserInfo
                WHERE ID=?;`;
    const [IDRows]=await connection.query(selectUserIDQuery,ID);
    return IDRows;
}
//유저 생성
async function insertUserInfo(connection, insertUserParam) {
    const insertUserInfoQuery = `
          INSERT INTO UserInfo(ID, PW , nickname,interest)
          VALUES (?, ?, ?, ?);
      `;
    const insertUserInfoRow = await connection.query(
      insertUserInfoQuery,
      insertUserParam
    );
  
    return insertUserInfoRow;
  }
  //비밀번호 확인
  async function selectUserPassword(connection,ID) {
    const selectUserPasswordQuery = `
          SELECT ID,PW,nickname
          FROM UserInfo 
          WHERE ID = ? ;`;
    const selectUserPasswordRow = await connection.query(
        selectUserPasswordQuery,
        ID
    );
  
    return selectUserPasswordRow;
  }
  //유저정보 업데이트
  async function updateUserInfo(connection,ID,newnickname){
    const updateUserInfoQuery=`
        UPDATE UserInfo
        SET nickname=?
        WHERE ID=?; 
    `;
    await connection.query(
      updateUserInfoQuery,
      newnickname,
      ID
    );
  }

export default{
  selectUser,
  selectUserID,
  selectUserPassword,
  insertUserInfo,
  updateUserInfo,
};

