const { Student } = require('../models/index');

module.exports = {

    createStudent(req, res) {

        const student = {
            name: req.body.name,
            dni: req.body.dni,
            datebirth: req.body.datebirth
        };

        Student.create(student)
            .then(data => {
                res.send(data);
            }).catch(err => {
                res.status(500).send({
                    message: err.message || "Ocurrio un error mientras se guardaba"
                })
            })
    },

    updateStudent(req, res) {

        try {
            Student.findAll({ where: { id: req.body.studentId } })
                .then(async (result) => {
                    if (result.length > 0) {
                        Student.update({
                            name: req.body.name,
                            dni: req.body.dni,
                            datebirth: req.body.datebirth
                        },
                            {
                                where: { id: req.body.studentId }
                            });
                        res.status(200).json({
                            message: "actualizacion correcta",
                            name: req.body.name,
                            dni: req.body.dni,
                            datebirth: req.body.datebirth
                        })
                    } else {
                        res.status(500).json({ message: "actualizacion fallida" })
                    }
                })
        } catch (err) {
            res.status(404).json({ message: err });
        }
    },

    deleteStudent(req, res) {
        try {
            Student.findAll({ where: { id: req.body.studentId } })
                .then(async (result) => {
                    if (result.length > 0) {
                        Student.destroy({
                            message: "eliminacion correcta",
                            where: { id: req.body.studentId }
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