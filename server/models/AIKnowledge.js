const mongoose = require("mongoose");

const aiKnowledgeSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
      enum: ["personal", "professional"],
      trim: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const AIKnowledge = mongoose.model(
  "AIKnowledge",
  aiKnowledgeSchema
);

module.exports = AIKnowledge;