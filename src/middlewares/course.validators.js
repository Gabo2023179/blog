import { body, param } from 'express-validator';
import { courseExists, courseNameExists } from '../helpers/db-validators.js';
import { validarCampos } from './validate-fields.js';
import { handleErrors } from './handle-errors.js';

export const createCourseValidator = [
  body('name')
    .notEmpty().withMessage('El nombre es requerido')
    .isString().withMessage('El nombre debe ser texto')
    .custom(courseNameExists),
  body('description')
    .optional()
    .isString().withMessage('La descripción debe ser texto'),
  validarCampos,
  handleErrors
];

export const getCourseByIdValidator = [
  param('id')
    .isMongoId().withMessage('No es un ID válido de MongoDB')
    .custom(courseExists),
  validarCampos,
  handleErrors
];

export const updateCourseValidator = [
  param('id')
    .isMongoId().withMessage('No es un ID válido de MongoDB')
    .custom(courseExists),
  body('name')
    .optional()
    .isString().withMessage('El nombre debe ser texto')
    .custom(courseNameExists),
  body('description')
    .optional()
    .isString().withMessage('La descripción debe ser texto'),
  validarCampos,
  handleErrors
];

export const deleteCourseValidator = [
  param('id')
    .isMongoId().withMessage('No es un ID válido de MongoDB')
    .custom(courseExists),
  validarCampos,
  handleErrors
];