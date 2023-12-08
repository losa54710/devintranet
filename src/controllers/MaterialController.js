const { Material } = require('../models/index');

module.exports = {

    createMaterial(req, res) {

        const material = {
            name: req.body.name,
            file: req.body.file,
            issueId: req.body.issueId
        };

        Material.create(material)
            .then(data => {
                res.send(data);
            }).catch(err => {
                res.status(500).send({
                    message: err.message || "Ocurrio un error mientras se guardaba"
                })
            })
    },

    updateMaterial(req, res) {

        try {
            Material.findAll({ where: { id: req.body.materialId } })
                .then(async (result) => {
                    if (result.length > 0) {
                        Material.update({
                            name: req.body.name,
                            file: req.body.file,
                            issueId: req.body.issueId
                        },
                            {
                                where: { id: req.body.materialId }
                            });
                        res.status(200).json({
                            message: "actualizacion correcta",
                            name: req.body.name,
                            file: req.body.file,
                            issueId: req.body.issueId
                        })
                    } else {
                        res.status(500).json({ message: "actualizacion fallida" })
                    }
                })
        } catch (err) {
            res.status(404).json({ message: err });
        }
    },

    deleteMaterial(req, res) {
        try {
            Material.findAll({ where: { id: req.body.materialId } })
                .then(async (result) => {
                    if (result.length > 0) {
                        Material.destroy({
                            message: "eliminacion correcta",
                            where: { id: req.body.materialId }
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