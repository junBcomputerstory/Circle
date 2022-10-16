import {pool} from '../config/mysql.js';
import CircleDao from './CircleDao.js';

class Circlecheck{
    async findall(){
        const Dao=new CircleDao;
        const connection=await pool.getConnection(async(conn)=>conn);
        const circlerow=await Dao.search(connection,CircleName);
        connection.release();

        return circlerow;
    }
    async findbyname(CircleName){
        const Dao=new CircleDao;
        const connection= await pool.getConnection(async(conn)=>conn);
        const circlerow=await Dao.namesearch(connection,CircleName);
        connection.release();

        return circlerow;
    }
    async findbylocation(Circlelocation){
        const Dao=new CircleDao;
        const connection= await pool.getConnection(async(conn)=>conn);
        const circlerow=await Dao.locationsearch(connection,Circlelocation);
        connection.release();

        return circlerow;
    }
    async findbytype(Circletype){
        const Dao=new CircleDao;
        const connection= await pool.getConnection(async(conn)=>conn);
        const circlerow=await Dao.typesearch(connection,Circletype);
        connection.release();

        return circlerow;
    }
    async findbynameandlocation(CircleName,Circlelocation){
        const Dao=new CircleDao;
        const connection= await pool.getConnection(async(conn)=>conn);
        const circlerow=await Dao.namelocationsearch(connection,CircleName,Circlelocation);
        connection.release();

        return circlerow;
    }
    async findbynameandtype(CircleName,Circletype){
        const Dao=new CircleDao;
        const connection= await pool.getConnection(async(conn)=>conn);
        const circlerow=await Dao.nametypesearch(connection,CircleName,Circletype);
        connection.release();

        return circlerow;
    }
    async findbylocationtype(Circlelocation,Circletype){
        const Dao=new CircleDao;
        const connection= await pool.getConnection(async(conn)=>conn);
        const circlerow=await Dao.locationtypesearch(connection,Circlelocation,Circletype);
        connection.release();

        return circlerow;
    }
}

export default Circlecheck;