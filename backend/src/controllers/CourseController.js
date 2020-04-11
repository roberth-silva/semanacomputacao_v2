const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const {page = 1} = request.query;

        const [count] = await connection('courses').count();

        const courses = await connection('courses')
        .join('teachers', 'teachers.id', '=', 'courses.teacher_id')
        .join('coursearea', 'coursearea.id','=','courses.coursearea_id')
        .limit(5)
        .offset((page - 1) * 5)
        .select([
            'courses.name as course_name',
            'courses.description as course_description',
            'courses.init_date',
            'courses.end_date',
            'courses.local',
            'courses.hour',
            'courses.city',
            'courses.uf',
            'teachers.name',
            'teachers.email',
            'coursearea.initials',
            'coursearea.description'
        ]);

        //esquema de paginação
        response.header('X-Total-Count', count['count(*)']);

        return response.json(courses);
    },

    async create(request, response){
        const {name, description, init_date, end_date, local, hour, city, uf, teacher_id, coursearea_id} = request.body;        

        try {
            const [id] = await connection('courses').insert({
                name, description, init_date, end_date, local, hour, city, uf, teacher_id, coursearea_id
            });

            return response.json({id});

        } catch (error) {
            return response.json({"error": error});
        }
    }
};