class CircleDao{
    async search(connection){
        const searchquery=`SELECT (c.name,i.interest_name,)  
                        FROM Circle c left join interest_type i on (c.interest_id=i.interest_id)
                                      left join Area a on (c.area_id=a.area_id);`
    }

}

export default CircleDao;