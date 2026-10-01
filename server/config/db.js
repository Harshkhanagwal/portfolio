const mongoose = require("mongoose");

let dbConnectionPromise = null;

const connectDB = async () => {
  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is not configured");
  }

  if (mongoose.connection.readyState === 1) {
    return mongoose.connection;
  }

  if (!dbConnectionPromise) {
    dbConnectionPromise = mongoose
      .connect(process.env.MONGODB_URI)
      .then((connection) => {
        console.log(`MongoDB connected: ${connection.connection.host}`);
        return connection;
      })
      .catch((error) => {
        dbConnectionPromise = null;
        console.error("MongoDB connection failed:", error.message);
        throw error;
      });
  }

  return dbConnectionPromise;
};

module.exports = connectDB;
