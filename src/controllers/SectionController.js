const { Section } = require('../models/index');

module.exports = {

    createSection(req, res) {

        const section = {
            desc: req.body.desc,
            degreeId: req.body.degreeId
        };

        Section.create(section)
            .then(data => {
                res.send(data);
            }).catch(err => {
                res.status(500).send({
                    message: err.message || "Ocurrio un error mientras se guardaba"
                })
            })
    },

    updateSection(req, res) {

        try {
            Section.findAll({ where: { id: req.body.sectionId } })
                .then(async (result) => {
                    if (result.length > 0) {
                        Section.update({
                            desc: req.body.desc,
                            degreeId: req.body.degreeId
                        },
                            {
                                where: { id: req.body.sectionId }
                            });
                        res.status(200).json({
                            message: "actualizacion correcta",
                            desc: req.body.desc,
                            degreeId: req.body.degreeId
                        })
                    } else {
                        res.status(500).json({ message: "actualizacion fallida" })
                    }
                })
        } catch (err) {
            res.status(404).json({ message: err });
        }
    },

    deleteSection(req, res) {
        try {
            Section.findAll({ where: { id: req.body.sectionId } })
                .then(async (result) => {
                    if (result.length > 0) {
                        Section.destroy({
                            message: "eliminacion correcta",
                            where: { id: req.body.sectionId }
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