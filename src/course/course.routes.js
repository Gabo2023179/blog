import { Router } from 'express';
import {
  getCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse
} from '../course/course.controller.js';
import {
  createCourseValidator,
  getCourseByIdValidator,
  updateCourseValidator,
  deleteCourseValidator
} from '../middlewares/course.validator.js';

const router = Router();

router.get('/courses', getCourses);
router.get('/courses/:id', getCourseByIdValidator, getCourseById);
router.post('/courses', createCourseValidator, createCourse);
router.put('/courses/:id', updateCourseValidator, updateCourse);
router.delete('/courses/:id', deleteCourseValidator, deleteCourse);

export default router;
