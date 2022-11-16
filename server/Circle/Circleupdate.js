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
            const vec=[circleInfo.name,circleInfo.area_id,circleInfo.interest_id,circleInfo.sex,circleInfo.restrict,circleInfo.max_num,circleInfo.prime,1,circleInfo.intro];
            await CircleDao.insertCircle(connection,vec);
            connection.release();
            return response(baseResponse.SUCCESS);
        }
        catch(e){
            console.log(e);
            connection.release();
            return errResponse(baseResponse.DB_ERROR);
        }
    }

    async insertpicture(id,image){
        try{
            const connection=pool.getConnection(async(conn)=>conn);
            const vec=[image,id];
            await CircleDao.updateimage(connection,vec);

            return response(baseResponse.SUCCESS);
        }
        catch(e){
            console.log(e);
            return response(baseResponse.DB_ERROR);
        }
    }
}
export default new CircleUpdate();