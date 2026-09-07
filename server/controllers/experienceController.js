const Experience = require("../models/Experience");

/* -------------------- GET ALL EXPERIENCE -------------------- */

const getExperiences = async (req, res, next) => {
  try {
    const experiences = await Experience.find().sort({
      order: 1,
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: experiences.length,
      data: experiences,
    });
  } catch (error) {
    next(error);
  }
};

/* -------------------- GET SINGLE EXPERIENCE -------------------- */

const getExperience = async (req, res, next) => {
  try {
    const experience = await Experience.findById(req.params.id);

    if (!experience) {
      return res.status(404).json({
        success: false,
        message: "Experience not found",
      });
    }

    res.status(200).json({
      success: true,
      data: experience,
    });
  } catch (error) {
    next(error);
  }
};

/* -------------------- CREATE EXPERIENCE -------------------- */

const createExperience = async (req, res, next) => {
  try {
    const experience = await Experience.create(req.body);

    res.status(201).json({
      success: true,
      message: "Experience created successfully",
      data: experience,
    });
  } catch (error) {
    next(error);
  }
};

/* -------------------- UPDATE EXPERIENCE -------------------- */

const updateExperience = async (req, res, next) => {
  try {
    const experience = await Experience.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!experience) {
      return res.status(404).json({
        success: false,
        message: "Experience not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Experience updated successfully",
      data: experience,
    });
  } catch (error) {
    next(error);
  }
};

/* -------------------- DELETE EXPERIENCE -------------------- */

const deleteExperience = async (req, res, next) => {
  try {
    const experience = await Experience.findByIdAndDelete(
      req.params.id
    );

    if (!experience) {
      return res.status(404).json({
        success: false,
        message: "Experience not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Experience deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getExperiences,
  getExperience,
  createExperience,
  updateExperience,
  deleteExperience,
};