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
        const insertquery=``;
        
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
    async findname(connection,id){
        const searchquery=` SELECT *
                            FROM Circle
                            WHERE ciecle_id=?;`;
        const re=await connection.query(
            searchquery,
            id
        );
        return re;
    }

}

export default new CircleDao();