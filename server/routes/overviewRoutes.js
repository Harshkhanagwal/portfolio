const express = require("express");

const Project = require("../models/Project");
const Skill = require("../models/Skill");
const Experience = require("../models/Experience");

const protect = require("../middleware/authMiddleware");

const router = express.Router();

/* =========================================================
   ADMIN OVERVIEW
   ========================================================= */

router.get("/", async (req, res) => {
  try {
    const [
      projects,
      skills,
      experience,
    ] = await Promise.all([
      Project.countDocuments(),
      Skill.countDocuments(),
      Experience.countDocuments(),
    ]);

    res.status(200).json({
      success: true,

      data: {
        projects,
        skills,
        experience,
        aiKnowledge: 0,
      },
    });
  } catch (error) {
    console.error("Admin overview error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to load admin overview",
    });
  }
});

module.exports = router;