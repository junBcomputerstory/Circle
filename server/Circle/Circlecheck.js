import {pool} from '../config/mysql.js';
import CircleDao from './CircleDao.js';
import {pool} from '../config/mysql.js';

class Circlecheck{
    async findcircle(circleinfo){
        const vec=[circleinfo.name,circleinfo.interest_id,circleinfo.area_id];
        const connection= await pool.getConnection(async(conn)=>conn);
        const circlerow=CircleDao.CheckCircle(connection,vec);

        return circlerow;
    }
    async namecheck(name){
        const connection= await pool.getConnection(async(conn)=>conn);
        const circlerow=CircleDao.findname(connection,name);

        return circlerow;
    }
}

export default new Circlecheck();