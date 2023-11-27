const { Course } = require('../models/index');

module.exports = {

    createCourse(req,res){

        const course = {
            name:req.body.name
        };

        Course.create(course)
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrio un error mientras se guardaba"
            })
        })
    }

}