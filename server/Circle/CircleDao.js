class CircleDao{
    async checkCircle(connection,info){
        const searchquery=`SELECT * 
                           FROM Circle
                           WHERE IF( ? IS NOT NULL,name=?,name=name) AND IF (? IS NOT NULL,interest_id=?,interest_id=interest_id) AND IF(? IS NOT NULL,area_id=?,area_id=area_id);`;
        const searchrow=await connection.query(
            searchquery,
            info
        );
        return searchrow;
    }
    async inserCircle(connection,info){
        
    }

}

export default new CircleDao();