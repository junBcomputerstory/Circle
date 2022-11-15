class CircleDao{
    async checkCircle(connection,info){
        const searchquery=`SELECT * 
                           FROM Circle
                           WHERE IF( ? IS NOT NULL,name=?,name=name) AND IF (? IS NOT NULL,interest_id=?,interest_id=interest_id) AND IF(? IS NOT NULL,area_id=?,area_id=area_id) AND IF(? IS NOT NULL,sex=?,sex=sex);`;
        const searchrow=await connection.query(
            searchquery,
            info
        );
        return searchrow;
    }
    async inserCircle(connection,info){
        const insertquery=`INSERT INTO Circle(name,area_id,interest_id,sex,restrict,area_id,max_num,prime,cur_num)
                            VALUES (?,?,?,?,?,?,?,?,?);`;
        
        await connection.query(
            insertquery,
            info
        );
        
    }
    async findname(connection,name){
        const searchquery=` SELECT *
                            FROM Circle
                            WHERE name=?;`;
        const re=await connection.query(
            searchquery,
            name
        );
        return re;
    }
    async findid(connection,id){
        const searchquery=` SELECT *
                            FROM Circle
                            WHERE ciecle_id=?;`;
        const re=await connection.query(
            searchquery,
            id
        );
        return re;
    }
    async userCircle(connection,id){
        const searchquery= `SELECT name,circlepic,id
                            FROM Circle
                            WHERE id IN(?);`;
        const re=await connection.query(
            searchquery,
            [id]
        );
        return re;
    }

}

export default new CircleDao();