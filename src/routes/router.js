const express = require('express');
const router = express.Router();
const authCtrl = require('../controllers/AuthController');
const courseCtrl = require('../controllers/CourseController');

router.get('/', (req, res) => res.json({ hello: "world" }));

router.post('/api/signin', authCtrl.signIn);
router.post('/api/signup', authCtrl.signUp);

router.post('/api/createcourse', courseCtrl.createCourse);


module.exports = router;