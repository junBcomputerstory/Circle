import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

// TODO: 본인의 DB 계정 입력
const pool = mysql.createPool({
  host: process.env.Sqlhost,
  user: 'admin',
  port: '3306',
  password: process.env.SqlPW,
  database: 'Circle',
});

export { pool };
