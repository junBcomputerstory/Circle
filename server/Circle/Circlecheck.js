import {pool} from '../config/mysql.js';
import UserDao from '../User/UserDao.js';
import CircleDao from './CircleDao.js';

class Circlecheck{
    async findcircle(circleinfo){
        const vec=[circleinfo.name,circleinfo.name,circleinfo.interest_id,circleinfo.interest_id,circleinfo.area_id,circleinfo.area_id,circleinfo.sex,circleinfo.sex];
        const connection= await pool.getConnection(async(conn)=>conn);
        const circlerow=await CircleDao.checkCircle(connection,vec);
        connection.release();
        return circlerow[0];
    }
    async namecheck(name){
        const connection= await pool.getConnection(async(conn)=>conn);
        const circlerow=CircleDao.findname(connection,name);
        connection.release();

        return circlerow[0];
    }
    async idcheck(id){
        const connection= await pool.getConnection(async(conn)=>conn);
        const circlerow=await CircleDao.findid(connection,id);
        connection.release();
        return circlerow[0];
    }
    async userCircle(id){
        for(let i=0;i<id.length;i++)
            id[i]*=1;
        const connection= await pool.getConnection(async(conn)=>conn);
        const circlerow=CircleDao.userCircle(connection,id);
        connection.release();
        return circlerow;
    }
    async getnewcircleid(){
        const connection= await pool.getConnection(async(conn)=>conn);
        const id=await CircleDao.newid(connection);
        connection.release();
        return id[0];
    }

    async getgallery(id){
        const connection= await pool.getConnection(async(conn)=>conn);
        const picrow=await CircleDao.getpicture(connection,id);
        connection.release();

        return picrow[0];
    }

    async getcalender(id){
        const connection=await pool.getConnection(async(conn)=>conn);
        const todolist=await CircleDao.gettodo(connection,id);
        connection.release();

        return todolist[0];
    }

    async checkboard(id){
        const connection=await pool.getConnection(async(conn)=>conn);
        const board=await CircleDao.getboard(connection,id);
        connection.release();

        return board[0];
    }

    async checkcomment(board_id){
        const connection=await pool.getConnection(async(conn)=>conn);
        const comments=await CircleDao.getcomment(connection,board_id);

        return comments[0];
    }
}

export default new Circlecheck();