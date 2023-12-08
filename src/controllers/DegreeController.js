const { Degree } = require('../models/index');

module.exports = {

    createDegree(req,res){

        const degree = {
            desc:req.body.desc
        };

        Degree.create(degree)
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrio un error mientras se guardaba"
            })
        })
    },

    updateDegree(req, res){

        try{
            Degree.findAll({ where: { id: req.body.degreeId }})
            .then(async (result) => {
                if( result.length > 0){
                    Degree.update({
                        desc: req.body.desc
                    },
                    {
                        where: { id: req.body.degreeId }
                    });
                    res.status(200).json({
                        message: "actualizacion correcta",
                        desc: req.body.desc
                    })
                }else{
                    res.status(500).json({ message: "actualizacion fallida" })
                }
            })
        } catch( err) {
            res.status(404).json({ message: err });
        }
    },

    deleteDegree(req,res){
        try{
            Degree.findAll({ where: { id: req.body.degreeId }})
            .then(async (result) => {
                if( result.length > 0){
                    Degree.destroy({
                        message: "eliminacion correcta",
                        where: { id: req.body.degreeId }
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