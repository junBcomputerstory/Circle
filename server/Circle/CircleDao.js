class CircleDao{
    async checkCircle(connection,info){
        const searchquery=`
                           SELECT * 
                           FROM Circle
                           WHERE IF( ? !="",name=?,name=name) AND IF (? != 999,interest_id=?,interest_id=interest_id) AND IF(? != 999,area_id=?,area_id=area_id) AND IF(? !=999,sex=?,sex=sex);`;
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

    async newid(connection){
        const searchquery=`SELECT id
                           FROM Circle
                           ORDER BY id DESC
                           LIMIT 1;`;
        const re=await connection.query(
            searchquery
        );

        return re;
    }

}

export default new CircleDao();