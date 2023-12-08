const { Unit } = require('../models/index');

module.exports = {

    createUnit(req, res) {

        const unit = {
            name: req.body.name,
            courseId: req.body.courseId
        };

        Unit.create(unit)
            .then(data => {
                res.send(data);
            }).catch(err => {
                res.status(500).send({
                    message: err.message || "Ocurrio un error mientras se guardaba"
                })
            })
    },

    updateUnit(req, res) {

        try {
            Unit.findAll({ where: { id: req.body.unitId } })
                .then(async (result) => {
                    if (result.length > 0) {
                        Unit.update({
                            name: req.body.name,
                            courseId: req.body.courseId
                        },
                            {
                                where: { id: req.body.unitId }
                            });
                        res.status(200).json({
                            message: "actualizacion correcta",
                            name: req.body.name,
                            courseId: req.body.courseId
                        })
                    } else {
                        res.status(500).json({ message: "actualizacion fallida" })
                    }
                })
        } catch (err) {
            res.status(404).json({ message: err });
        }
    },

    deleteUnit(req, res) {
        try {
            Unit.findAll({ where: { id: req.body.unitId } })
                .then(async (result) => {
                    if (result.length > 0) {
                        Unit.destroy({
                            message: "eliminacion correcta",
                            where: { id: req.body.unitId }
                        });
                        res.status(200).json({
                            message: "curso eliminado"
                        })
                    } else {
                        res.status(500).json({ message: "eliminacion fallida" });
                    }
                })
        } catch (err) {
            res.status(404).json({ message: err });
        }
    }

}