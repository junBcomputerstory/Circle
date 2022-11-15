import {pool} from '../config/mysql.js';
import CircleDao from './CircleDao.js';

class Circlecheck{
    async findcircle(circleinfo){
        const vec=[circleinfo.name,circleinfo.interest_id,circleinfo.area_id];
        const connection= await pool.getConnection(async(conn)=>conn);
        const circlerow=CircleDao.checkCircle(connection,vec);

        return circlerow[0];
    }
    async namecheck(name){
        const connection= await pool.getConnection(async(conn)=>conn);
        const circlerow=CircleDao.findname(connection,name);

        return circlerow[0];
    }
    async idcheck(id){
        const connection= await pool.getConnection(async(conn)=>conn);
        const circlerow=CircleDao.findid(connection,id);

        return circlerow[0];
    }
    async userCircle(id){
        for(let i=0;i<id.length;i++)
            id[i]*=1;
        const connection= await pool.getConnection(async(conn)=>conn);
        const circlerow=CircleDao.userCircle(connection,id);

        return circlerow;
    }
}

export default new Circlecheck();