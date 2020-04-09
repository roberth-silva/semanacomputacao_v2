const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const teachers = await connection('teachers').select('*');
        return response.json(teachers);
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
        
    }
};