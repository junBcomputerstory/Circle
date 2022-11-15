export const SUCCESS = { "isSuccess": true, "code": 1000, "message": "성공" };
export const EMPTY_DATA= { "isSuccess": false, "code": 1001, "message": "데이터를 입력해주세요" };
//가입 오류 관리
export const SIGNUP_ID_EMPTY = { "isSuccess": false, "code": 2001, "message": "아이디를 입력해주세요" };
export const SIGNUP_PW_EMPTY = { "isSuccess": false, "code": 2004, "message": "비밀번호를 입력 해주세요." };
export const SIGNUP_NICKNAME_EMPTY = { "isSuccess": false, "code": 2006, "message": "닉네임을 입력 해주세요." };
//로그인 오류 관리
export const SIGNIN_ID_EMPTY= { "isSuccess": false, "code": 2007, "message": "아이디를 입력해주세요." };
export const SIGNIN_ID_WRONG= { "isSuccess": false, "code": 2008, "message": "아이디가 틀렸습니다" };
export const SIGNIN_PW_EMPTY = { "isSuccess": false, "code": 2011, "message": "비밀번호를 입력 해주세요." };

//프로필 수정
export const Image_upload_err={ "isSuccess":false, "code":2020, "message":"이미지 업로드 실패"};
export const USER_USERID_EMPTY = { "isSuccess": false, "code": 2012, "message": "Id를 입력해주세요." };
export const USER_USERID_NOT_EXIST = { "isSuccess": false, "code": 2013, "message": "유저 아이디 값을 확인해주세요" };
export const USER_NICKNAME_EMPTY = { "isSuccess": false, "code": 2017, "message": "변경할 닉네임 값을 입력해주세요" };
export const USER_STATUS_EMPTY = { "isSuccess": false, "code": 2018, "message": "회원 상태값을 입력해주세요" };
export const SIGNUP_REDUNDANT_ID = { "isSuccess": false, "code": 3001, "message": "중복된 아이디입니다." };
export const SIGNUP_REDUNDANT_NICKNAME = { "isSuccess": false, "code": 3002, "message": "중복된 닉네임입니다." };
export const SIGNIN_EMAIL_WRONG = { "isSuccess": false, "code": 3003, "message": "아이디가 잘못 되었습니다." };
export const SIGNIN_PASSWORD_WRONG = { "isSuccess": false, "code": 3004, "message": "비밀번호가 잘못 되었습니다." };
export const DB_ERROR = { "isSuccess": false, "code": 4000, "message": "데이터 베이스 에러" };
export const SERVER_ERROR = { "isSuccess": false, "code": 4001, "message": "서버 에러" };
export const CIRCLE_NOTFOUND ={ "isSuccess": false, "code": 5001, "message": "서클이 존재하지 않습니다."};
export const CIRCLE_NAME_ERROR ={ "isSuccess": false, "code": 5002, "message": "서클 이름이 이미 존재 합니다"};
