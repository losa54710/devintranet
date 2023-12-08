const { Rating } = require('../models/index');

module.exports = {

    createRating(req, res) {

        const rating = {
            q1: req.body.q1,
            q2: req.body.q2,
            q3: req.body.q3,
            average: req.body.average,
            unitId: req.body.unitId
        };

        Rating.create(rating)
            .then(data => {
                res.send(data);
            }).catch(err => {
                res.status(500).send({
                    message: err.message || "Ocurrio un error mientras se guardaba"
                })
            })
    },

    updateRating(req, res) {

        try {
            Rating.findAll({ where: { id: req.body.ratingId } })
                .then(async (result) => {
                    if (result.length > 0) {
                        Rating.update({
                            q1: req.body.q1,
                            q2: req.body.q2,
                            q3: req.body.q3,
                            average: req.body.average,
                            unitId: req.body.unitId
                        },
                            {
                                where: { id: req.body.ratingId }
                            });
                        res.status(200).json({
                            message: "actualizacion correcta",
                            q1: req.body.q1,
                            q2: req.body.q2,
                            q3: req.body.q3,
                            average: req.body.average,
                            unitId: req.body.unitId
                        })
                    } else {
                        res.status(500).json({ message: "actualizacion fallida" })
                    }
                })
        } catch (err) {
            res.status(404).json({ message: err });
        }
    },

    deleteRating(req, res) {
        try {
            Rating.findAll({ where: { id: req.body.ratingId } })
                .then(async (result) => {
                    if (result.length > 0) {
                        Rating.destroy({
                            message: "eliminacion correcta",
                            where: { id: req.body.ratingId }
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