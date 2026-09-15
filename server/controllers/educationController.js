const Education = require("../models/Education");

const getEducation = async (req, res, next) => {
  try {
    const education = await Education.find({}).sort({ order: 1 });

    res.status(200).json({
      success: true,
      data: education,
    });
  } catch (error) {
    next(error);
  }
};

const createEducation = async (req, res, next) => {
  try {
    const {
      institution,
      degree,
      field,
      startYear,
      endYear,
      description,
      order,
    } = req.body;

    if (!institution || !degree || !field || !startYear) {
      return res.status(400).json({
        success: false,
        message:
          "Institution, degree, field and start year are required",
      });
    }

    const education = await Education.create({
      institution,
      degree,
      field,
      startYear,
      endYear,
      description,
      order,
    });

    res.status(201).json({
      success: true,
      data: education,
    });
  } catch (error) {
    next(error);
  }
};

const updateEducation = async (req, res, next) => {
  try {
    const { id } = req.params;

    const {
      institution,
      degree,
      field,
      startYear,
      endYear,
      description,
      order,
    } = req.body;

    if (!institution || !degree || !field || !startYear) {
      return res.status(400).json({
        success: false,
        message:
          "Institution, degree, field and start year are required",
      });
    }

    const education = await Education.findByIdAndUpdate(
      id,
      {
        institution,
        degree,
        field,
        startYear,
        endYear,
        description,
        order,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!education) {
      return res.status(404).json({
        success: false,
        message: "Education not found",
      });
    }

    res.status(200).json({
      success: true,
      data: education,
    });
  } catch (error) {
    next(error);
  }
};

const deleteEducation = async (req, res, next) => {
  try {
    const { id } = req.params;

    const education = await Education.findByIdAndDelete(id);

    if (!education) {
      return res.status(404).json({
        success: false,
        message: "Education not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Education deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getEducation,
  createEducation,
  updateEducation,
  deleteEducation,
};