const path = require("path");
const mongoose = require("mongoose");

require("dotenv").config({
  path: path.join(__dirname, ".env"),
});

const app = require("./app");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 5000;

let dbConnectionPromise = null;

const ensureDBConnection = async () => {
  // Already connected
  if (mongoose.connection.readyState === 1) {
    return;
  }

  // Connection already in progress
  if (!dbConnectionPromise) {
    dbConnectionPromise = connectDB();
  }

  try {
    await dbConnectionPromise;
  } catch (error) {
    dbConnectionPromise = null;
    throw error;
  }
};

// =========================================
// VERCEL HANDLER
// =========================================

const handler = async (req, res) => {
  try {
    await ensureDBConnection();

    return app(req, res);
  } catch (error) {
    console.error(
      "Database connection failed:",
      error.message
    );

    return res.status(500).json({
      success: false,
      message: "Database connection failed",
    });
  }
};

// =========================================
// LOCAL DEVELOPMENT
// =========================================

if (require.main === module) {
  const startServer = async () => {
    try {
      await connectDB();

      app.listen(PORT, () => {
        console.log(
          `Server running on http://localhost:${PORT}`
        );
      });
    } catch (error) {
      console.error(
        "Failed to start server:",
        error.message
      );

      process.exit(1);
    }
  };

  startServer();
}

module.exports = handler;