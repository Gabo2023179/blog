import Course from '../course/course.model.js';

export const getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    return res.status(200).json({
      success: true,
      courses
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: 'Error al obtener los cursos',
      error: err.message
    });
  }
};

export const getCourseById = async (req, res) => {
  try {
    const { id } = req.params;
    const course = await Course.findById(id);
    return res.status(200).json({
      success: true,
      course
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: 'Error al obtener el curso',
      error: err.message
    });
  }
};

export const createCourse = async (req, res) => {
  try {
    const data = req.body;
    const course = await Course.create(data);
    return res.status(201).json({
      success: true,
      message: 'Curso creado exitosamente',
      course
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: 'Error al crear el curso',
      error: err.message
    });
  }
};

export const updateCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const course = await Course.findByIdAndUpdate(id, data, { new: true });
    return res.status(200).json({
      success: true,
      message: 'Curso actualizado exitosamente',
      course
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: 'Error al actualizar el curso',
      error: err.message
    });
  }
};

export const deleteCourse = async (req, res) => {
  try {
    const { id } = req.params;
    await Course.findByIdAndDelete(id);
    return res.status(200).json({
      success: true,
      message: 'Curso eliminado exitosamente'
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: 'Error al eliminar el curso',
      error: err.message
    });
  }
};