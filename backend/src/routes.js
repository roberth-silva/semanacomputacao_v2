const express = require('express');

const teacherController = require('./controllers/TeacherController');
const courseController = require('./controllers/CourseController');
const courseAreaController = require('./controllers/CourseAreaController');

const routes = express.Router();

routes.get('/teacher', teacherController.index);
routes.post('/teacher', teacherController.create);

routes.get('/course', courseController.index);
routes.post('/course', courseController.create);

routes.get('/coursearea', courseAreaController.index);
routes.get('/coursearea/:id', courseAreaController.getCourseArea);
routes.post('/coursearea', courseAreaController.create);
routes.put('/coursearea', courseAreaController.edit);
routes.delete('/coursearea/:id', courseAreaController.delete);


module.exports = routes;