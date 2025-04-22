import Comment from '../comment/comment.model.js';

export const getCommentsByPublication = async (req, res) => {
  try {
    const { pubId } = req.params;
    const comments = await Comment.find({ publication: pubId }).sort('createdAt');

    return res.status(200).json({
      success: true,
      comments
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: 'Error al obtener los comentarios',
      error: err.message
    });
  }
};

export const addCommentToPublication = async (req, res) => {
  try {
    const { pubId } = req.params;
    const { name, content } = req.body;
    const newComment = new Comment({ name, content, publication: pubId });
    const saved = await newComment.save();

    return res.status(201).json({
      success: true,
      message: 'Comentario agregado exitosamente',
      comment: saved
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: 'Error al agregar el comentario',
      error: err.message
    });
  }
};