const { Issue } = require('../models/index');

module.exports = {

    createIssue(req, res) {

        const issue = {
            desc: req.body.desc,
            unitId: req.body.unitId
        };

        Issue.create(issue)
            .then(data => {
                res.send(data);
            }).catch(err => {
                res.status(500).send({
                    message: err.message || "Ocurrio un error mientras se guardaba"
                })
            })
    },

    updateIssue(req, res) {

        try {
            Issue.findAll({ where: { id: req.body.issueId } })
                .then(async (result) => {
                    if (result.length > 0) {
                        Issue.update({
                            desc: req.body.desc,
                            unitId: req.body.unitId
                        },
                            {
                                where: { id: req.body.issueId }
                            });
                        res.status(200).json({
                            message: "actualizacion correcta",
                            desc: req.body.desc,
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

    deleteIssue(req, res) {
        try {
            Issue.findAll({ where: { id: req.body.issueId } })
                .then(async (result) => {
                    if (result.length > 0) {
                        Issue.destroy({
                            message: "eliminacion correcta",
                            where: { id: req.body.issueId }
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