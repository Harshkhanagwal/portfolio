const Project = require("../../models/Project");

const getProjects = async () => {
  const projects = await Project
    .find({})
    .sort({ order: 1 })
    .select(
      "title subtitle category description highlights technologies featured order"
    )
    .lean();

  return projects;
};

const projectsTool = {
  type: "function",

  function: {
    name: "getProjects",

    description:
      "Retrieve Harsh's portfolio projects, including project titles, categories, descriptions, highlights, technologies, and featured status.",

    parameters: {
      type: "object",

      properties: {},

      required: [],

      additionalProperties: false,
    },
  },
};

module.exports = {
  getProjects,
  projectsTool,
};