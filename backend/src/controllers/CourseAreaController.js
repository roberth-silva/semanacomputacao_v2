const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const {page = 1} = request.query;

        const [count] = await connection('coursearea').count();

        const coursearea = await connection('coursearea').select('*');

        //esquema de paginação
        response.header('X-Total-Count', count['count(*)']);

        return response.json(coursearea);
    },

    async getCourseArea(request, response){
        const id = request.params.id;

        const coursearea = await connection('coursearea').where('id',id).select('*');

        return response.json(coursearea);
    },

    async create(request, response){
        const {description} = request.body;        

        try {
            const [id] = await connection('coursearea')
            .insert({description});

            return response.json({id});

        } catch (error) {
            return response.json({"error": error});
        }
    },

    async edit(request, response){        
        const {id, description} = request.body;        

        try {
            const {dataReturn} = await connection('coursearea')
            .where('id', id)
            .update({description: description});

            return response.json({"id":id, "description":description});

        } catch (error) {
            console.log(error);            
            return response.json({"error": error});
        }
    },

    async delete(request, response){
        const {id} = request.params;        

        try {
            await connection('coursearea').where('id',id).delete();
            return response.status(204).send();
            
        } catch (error) {
            return  response.status(406).send();
        }
    }
};