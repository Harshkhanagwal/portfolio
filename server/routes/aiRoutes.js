const express = require("express");

const { chat } = require("../controllers/aiController");

const router = express.Router();

router.post("/chat", chat);
router.get("/test", (req, res) => {
  res.json({
    success: true,
    message: "AI route is working",
  });
});



module.exports = router;