const { Period } = require('../models/index');

module.exports = {

    createPeriod(req, res) {

        const period = {
            year: req.body.year
        };

        Period.create(period)
            .then(data => {
                res.send(data);
            }).catch(err => {
                res.status(500).send({
                    message: err.message || "Ocurrio un error mientras se guardaba"
                })
            })
    },

    updatePeriod(req, res) {

        try {
            Period.findAll({ where: { id: req.body.periodId } })
                .then(async (result) => {
                    if (result.length > 0) {
                        Period.update({
                            year: req.body.year
                        },
                            {
                                where: { id: req.body.periodId }
                            });
                        res.status(200).json({
                            message: "actualizacion correcta",
                            year: req.body.year
                        })
                    } else {
                        res.status(500).json({ message: "actualizacion fallida" })
                    }
                })
        } catch (err) {
            res.status(404).json({ message: err });
        }
    },

    deletePeriod(req, res) {
        try {
            Period.findAll({ where: { id: req.body.periodId } })
                .then(async (result) => {
                    if (result.length > 0) {
                        Period.destroy({
                            message: "eliminacion correcta",
                            where: { id: req.body.periodId }
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