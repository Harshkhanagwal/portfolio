const Experience = require("../../models/Experience");
const Project = require("../../models/Project");
const Skill = require("../../models/Skill");
const Education = require("../../models/Education");
const AIKnowledge = require("../../models/AIKnowledge");

const getPortfolioContext = async () => {
  const [
    experience,
    projects,
    skills,
    education,
    aiKnowledge,
  ] = await Promise.all([
    Experience.find({})
      .sort({ order: 1 })
      .lean(),

    Project.find({})
      .sort({ order: 1 })
      .select(
        "title subtitle category description highlights technologies featured order"
      )
      .lean(),

    Skill.find({})
      .sort({ order: 1 })
      .lean(),

    Education.find({})
      .sort({ order: 1 })
      .lean(),

    AIKnowledge.find({})
      .sort({ createdAt: -1 })
      .lean(),
  ]);

  return {
    experience,
    projects,
    skills,
    education,
    aiKnowledge,
  };
};

const portfolioTool = {
  type: "function",

  function: {
    name: "getPortfolioContext",

    description:
      "Retrieve Harsh's complete portfolio profile, including professional experience, projects, technical skills, education, and personal/professional AI knowledge. Use this tool when the user asks for a broad overview of Harsh or requests information spanning multiple portfolio sections.",

    parameters: {
      type: "object",
      properties: {},
      required: [],
      additionalProperties: false,
    },
  },
};

module.exports = {
  getPortfolioContext,
  portfolioTool,
};