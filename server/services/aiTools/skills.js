const Skill = require("../../models/Skill");

const getSkills = async () => {
  const skills = await Skill
    .find({})
    .sort({ order: 1 })
    .lean();

  return skills;
};

const skillsTool = {
  type: "function",

  function: {
    name: "getSkills",

    description:
      "Retrieve Harsh's technical skills and technologies from his portfolio.",

    parameters: {
      type: "object",
      properties: {},
      required: [],
      additionalProperties: false,
    },
  },
};

module.exports = {
  getSkills,
  skillsTool,
};