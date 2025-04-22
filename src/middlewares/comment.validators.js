import { body, param } from 'express‑validator';
import { postExists } from '../helpers/db-validators.js';
import { validarCampos } from './validate-fields.js';
import { handleErrors } from './handle-errors.js';

export const getCommentsValidator = [
  param('pubId')
    .isMongoId().withMessage('No es un ID válido de MongoDB')
    .custom(postExists),
  validarCampos,
  handleErrors
];

export const createCommentValidator = [
  param('pubId')
    .isMongoId().withMessage('No es un ID válido de MongoDB')
    .custom(postExists),
  body('name')
    .notEmpty().withMessage('El nombre es requerido')
    .isString().withMessage('El nombre debe ser texto'),
  body('content')
    .notEmpty().withMessage('El contenido es requerido')
    .isString().withMessage('El contenido debe ser texto'),
  validarCampos,
  handleErrors
];