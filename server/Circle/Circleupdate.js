import CircleDao from './CircleDao.js';
import CircleCheck from './Circlecheck.js';
import {pool} from '../config/mysql.js';
import { response,errResponse } from '../config/response.js';
import * as baseResponse from'../config/baseResponse.js';

class CircleUpdate{
    async insertcircle(circleInfo,image,email){
        const connection=await pool.getConnection(async (conn)=>conn);
        try{
            const crow=await CircleCheck.namecheck(circleInfo.name);
            if(crow>1){
                return response(baseResponse.CIRCLE_NAME_ERROR);
            }
            const vec=[circleInfo.name,circleInfo.area_id,circleInfo.interest_id,circleInfo.sex,circleInfo.restrict,circleInfo.max_num,circleInfo.prime,1,circleInfo.intro,image,email];
            await CircleDao.insertCircle(connection,vec);
            connection.release();
            return response(baseResponse.SUCCESS);
        }
        catch(e){
            console.log(e);
            connection.release();
            return response(baseResponse.DB_ERROR);
        }
    }

    async insertpicture(id,image){
        try{
            const connection=await pool.getConnection(async (conn)=>conn);
            const vec=[image,id];
            await CircleDao.updateimage(connection,vec);

            return response(baseResponse.SUCCESS);
        }
        catch(e){
            console.log(e);
            return response(baseResponse.DB_ERROR);
        }
    }

    async insertboard(vec){
        try{
            const connection=await pool.getConnection(async (conn)=>conn);
            await CircleDao.updateboard(connection,vec);

            return response(baseResponse.SUCCESS);
        }
        catch(e){
            console.log(e);
            return response(baseResponse.DB_ERROR);
        }
    }

    async insertschedule(ID,date,content){
        try{
            const connection=await pool.getConnection(async(conn)=>conn);
            const vec=[ID,date,content];
            await CircleDao.updatecalender(connection,vec);

            return response(baseResponse.SUCCESS);
        }
        catch(e){
            console.log(e);
            return response(baseResponse.DB_ERROR);
        }
    }

    async updatecomment(text_id,nickname,comment){
        try{
            const connection=await pool.getConnection(async(conn)=>conn);
            const vec=[text_id,comment,nickname];
            await CircleDao.insertcomment(connection,vec);
            return response(baseResponse.SUCCESS);
        }
        catch(e){
            console.log(e);
            return response(baseResponse.DB_ERROR);
        }
    }

    async updatecurnum(ID){
        try{
            const connection=await pool.getConnection(async(conn)=>conn);
            await CircleDao.updatecur(connection,ID);
            return response(baseResponse.SUCCESS);
        }
        catch(e){
            console.log(e);
            return response(baseResponse.DB_ERROR);
        }
    }
}
export default new CircleUpdate();