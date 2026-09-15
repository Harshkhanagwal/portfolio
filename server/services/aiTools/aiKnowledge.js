const AIKnowledge = require("../../models/AIKnowledge");

const getAIKnowledge = async () => {
  const knowledge = await AIKnowledge
    .find({})
    .sort({ createdAt: -1 })
    .select("category title description")
    .lean();

  return knowledge;
};

const aiKnowledgeTool = {
  type: "function",

  function: {
    name: "getAIKnowledge",

    description:
      "Retrieve personal and professional contextual information about Harsh, including his interests, career goals, journey, background, preferences, and other information stored in AI Knowledge.",

    parameters: {
      type: "object",
      properties: {},
      required: [],
      additionalProperties: false,
    },
  },
};

module.exports = {
  getAIKnowledge,
  aiKnowledgeTool,
};