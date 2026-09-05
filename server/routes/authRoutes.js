const express = require("express");

const {
  login,
  logout,
  getCurrentAdmin,
} = require("../controllers/authController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/login", login);

router.post("/logout", logout);

router.get("/me", protect, getCurrentAdmin);

module.exports = router;