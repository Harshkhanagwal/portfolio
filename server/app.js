const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const projectRoutes = require("./routes/projectRoutes");
const authRoutes = require("./routes/authRoutes");


const app = express();

/* -------------------- MIDDLEWARE -------------------- */

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

/* -------------------- HEALTH CHECK -------------------- */

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Harsh's Portfolio API is running",
  });
});

/* -------------------- ROUTES -------------------- */

app.use("/api/projects", projectRoutes);
app.use("/api/auth", authRoutes);

/* -------------------- 404 -------------------- */

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

/* -------------------- ERROR HANDLER -------------------- */

app.use((err, req, res, next) => {
  console.error(err);

  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal server error",
  });
});

module.exports = app;