const { Enroll } = require('../models/index');

module.exports = {

    async getEnrolls(req, res) {
        try {
            const enrolls = await Enroll.findAll();
            if (enrolls.length > 0) {
                res.status(200).json({ data: enrolls });
            } else {
                res.status(200).json({ data: [] });
            }
        } catch (error) {
            res.status(404).json({ message: error });
        }
    },

    async createEnroll(req, res) {

        const enroll = {
            desc: req.body.desc,
            studentId: req.body.studentId,
            courseId: req.body.courseId,
            periodId: req.body.periodId,
            degreeId: req.body.degreeId
        };

        await Enroll.create(enroll)
            .then(data => {
                res.send(data);
            }).catch(err => {
                res.status(500).send({
                    message: err.message || "Ocurrio un error mientras se guardaba"
                })
            })
    },

    async updateEnroll(req, res) {

        try {
            Enroll.findAll({ where: { id: req.body.enrollId } })
                .then(async (result) => {
                    if (result.length > 0) {
                       await Enroll.update({
                            desc: req.body.desc,
                            studentId: req.body.studentId,
                            courseId: req.body.courseId,
                            periodId: req.body.periodId,
                            degreeId: req.body.degreeId
                        },
                            {
                                where: { id: req.body.enrollId }
                            });
                        res.status(200).json({
                            message: "actualizacion correcta",
                            desc: req.body.desc,
                            studentId: req.body.studentId,
                            courseId: req.body.courseId,
                            periodId: req.body.periodId,
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

    async deleteEnroll(req, res) {
        try {
            Enroll.findAll({ where: { id: req.body.enrollId } })
                .then(async (result) => {
                    if (result.length > 0) {
                        await Enroll.destroy({
                            message: "eliminacion correcta",
                            where: { id: req.body.enrollId }
                        });
                        res.status(200).json({
                            message: "estudiante eliminado"
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