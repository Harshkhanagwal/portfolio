const Experience = require("../../models/Experience");

const getExperience = async () => {
  const experience = await Experience
    .find({})
    .sort({ order: 1 })
    .lean();

  return experience;
};

const experienceTool = {
  type: "function",

  function: {
    name: "getExperience",

    description:
      "Retrieve Harsh's professional experience, including his roles, companies, employment type, duration, locations, descriptions, and skills.",

    parameters: {
      type: "object",
      properties: {},
      required: [],
      additionalProperties: false,
    },
  },
};

module.exports = {
  getExperience,
  experienceTool,
};