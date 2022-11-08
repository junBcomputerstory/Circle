import CircleDao from './CircleDao.js';
import CircleCheck from './Circlecheck.js';
import {pool} from '../config/mysql.js';
import { response,errResponse } from '../config/response.js';
import * as baseResponse from'../config/baseResponse.js';

class CircleUpdate{
    async insertcircle(circleInfo){
        const connection=await pool.getConnection(async (conn)=>conn);
        try{
            const crow=await CircleCheck.namecheck(circleInfo.name);
            if(crow>1){
                return errResponse(baseResponse.CIRCLE_NAME_ERROR);
            }
            const vec=[req.name,req.interest_id,req.sex,req.restirct,req.area_id,req.intro,req.Circlepic,req.max_num];
            const re=CircleDao.inserCircle(connection,vec);
            connection.release();
            return re
        }
        catch(e){
            console.log(e);
            connection.release();
        }
    }
}
export default new CircleUpdate();