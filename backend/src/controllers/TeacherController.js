const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const teachers = await connection('teachers').select('*');
        return response.json(teachers);
    },

    async getTeacher(request, response){
        const id = request.params.id;

        const teacher = await connection('teachers').where('id',id).select('*');

        return response.json(teacher);
    },

    async create(request, response){
        const {name, email, description} = request.body;

        try {
            const [id] = await connection('teachers').insert({
                name,
                email,
                description
            });

            return response.json({id});

        } catch (error) {
            return response.json({"error": error});
        }        
    },

    async edit(request, response){        
        const {id, name, email, description} = request.body;        

        try {
            const {dataReturn} = await connection('teachers')
            .where('id', id)
            .update({
                name: name,
                email: email,
                description: description
            });

            return response.json({"id": id, "name": name, "email": email, "description": description});

        } catch (error) {        
            return response.json({"error": error});
        }
    },

    async delete(request, response){
        const {id} = request.params;        

        try {
            await connection('teachers').where('id',id).delete();
            return response.status(204).send();
            
        } catch (error) {
            return  response.status(406).send();
        }
    }
};