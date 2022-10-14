import mysql from 'mysql2/promise';

// TODO: 본인의 DB 계정 입력
const pool = mysql.createPool({
  host: 'circle.cfq3dtw0s8pz.ap-northeast-2.rds.amazonaws.com',
  user: 'admin',
  port: '3306',
  password: 'ghdwns12',
  database: 'Circle',
});

export { pool };
