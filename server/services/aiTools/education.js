const Education = require("../../models/Education");

const getEducation = async () => {
  const education = await Education
    .find({})
    .sort({ order: 1 })
    .select(
      "institution degree field startYear endYear description"
    )
    .lean();

  return education;
};

const educationTool = {
  type: "function",

  function: {
    name: "getEducation",

    description:
      "Retrieve Harsh's educational background, including institutions, degrees, fields of study, duration, and education descriptions.",

    parameters: {
      type: "object",
      properties: {},
      required: [],
      additionalProperties: false,
    },
  },
};

module.exports = {
  getEducation,
  educationTool,
};