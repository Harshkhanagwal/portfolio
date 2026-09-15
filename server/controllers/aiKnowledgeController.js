const AIKnowledge = require("../models/AIKnowledge");

// GET all AI knowledge
const getAIKnowledge = async (req, res, next) => {
  try {
    const knowledge = await AIKnowledge.find({}).sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      data: knowledge,
    });
  } catch (error) {
    next(error);
  }
};

// CREATE AI knowledge
const createAIKnowledge = async (req, res, next) => {
  try {
    const { category, title, description } = req.body;

    if (!category || !title || !description) {
      return res.status(400).json({
        success: false,
        message: "Category, title and description are required",
      });
    }

    const knowledge = await AIKnowledge.create({
      category,
      title,
      description,
    });

    res.status(201).json({
      success: true,
      data: knowledge,
    });
  } catch (error) {
    next(error);
  }
};

// UPDATE AI knowledge
const updateAIKnowledge = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { category, title, description } = req.body;

    if (!category || !title || !description) {
      return res.status(400).json({
        success: false,
        message: "Category, title and description are required",
      });
    }

    const knowledge = await AIKnowledge.findByIdAndUpdate(
      id,
      {
        category,
        title,
        description,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!knowledge) {
      return res.status(404).json({
        success: false,
        message: "AI knowledge not found",
      });
    }

    res.status(200).json({
      success: true,
      data: knowledge,
    });
  } catch (error) {
    next(error);
  }
};

// DELETE AI knowledge
const deleteAIKnowledge = async (req, res, next) => {
  try {
    const { id } = req.params;

    const knowledge = await AIKnowledge.findByIdAndDelete(id);

    if (!knowledge) {
      return res.status(404).json({
        success: false,
        message: "AI knowledge not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "AI knowledge deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAIKnowledge,
  createAIKnowledge,
  updateAIKnowledge,
  deleteAIKnowledge,
};