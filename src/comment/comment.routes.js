import { Router } from 'express';
import { getCommentsByPublication, addCommentToPublication } from './comment/comment.controller.js';
import { validateComment } from '../middlewares/comment.validator.js';

const router = Router();

router.get('/publications/:pubId/comments', getCommentsByPublication);

router.post( '/publications/:pubId/comments', validateComment,
  addCommentToPublication
);

export default router;