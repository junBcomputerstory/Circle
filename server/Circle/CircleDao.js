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
    async insertCircle(connection,info){
        const insertquery=`INSERT INTO Circle(name,area_id,interest_id,sex,caution,max_num,prime,cur_num,intro,circlepic,leader_email)
                           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`;
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
                            WHERE id=?;`;
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

    async updateimage(connection,vec){
        const updatequery=`UPDATE Circle
                           SET circlepic=?
                           WHERE id=?;  `;

        await connection.query(
            updatequery,
            vec
        );
    }

    async getpicture(connection,ID){
        const getquery=`SELECT pic_url
                        FROM Circle_gallery
                        WHERE circle_id=?;`;
        
        const pictures=await connection.query(
            getquery,
            ID
        );
        
        return pictures;
    }

    async gettodo(connection,ID){
        const getquery=`SELECT date,schedule
                        FROM Schedule_calendar
                        WHERE circle_id=?;`;
        
        const result=await connection.query(
            getquery,
            ID
        )

        return result;
    }

}

export default new CircleDao();