const express = require("express");

const {
  getAIKnowledge,
  createAIKnowledge,
  updateAIKnowledge,
  deleteAIKnowledge,
} = require("../controllers/aiKnowledgeController");

const router = express.Router();

router.get("/", getAIKnowledge);
router.post("/", createAIKnowledge);
router.put("/:id", updateAIKnowledge);
router.delete("/:id", deleteAIKnowledge);

module.exports = router;