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
    },

    updateCourse(req, res){

        try{
            Course.findAll({ where: { id: req.body.courseId }})
            .then(async (result) => {
                if( result.length > 0){
                    Course.update({
                        name: req.body.name
                    },
                    {
                        where: { id: req.body.courseId }
                    });
                    res.status(200).json({
                        message: "actualizacion correcta",
                        name: req.body.name
                    })
                }else{
                    res.status(500).json({ message: "actualizacion fallida" })
                }
            })
        } catch( err) {
            res.status(404).json({ message: err });
        }
    },

    deleteCourse(req,res){
        try{
            Course.findAll({ where: { id: req.body.courseId }})
            .then(async (result) => {
                if( result.length > 0){
                    Course.destroy({
                        message: "eliminacion correcta",
                        where: { id: req.body.courseId }
                    });
                    res.status(200).json({
                        message: "curso eliminado"
                    })
                }else{
                    res.status(500).json({ message: "eliminacion fallida" });
                }
            })
        } catch( err) {
            res.status(404).json({ message: err });
        }
    }

}