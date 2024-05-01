

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // console.log(process.env.HELL)
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
        dbName: "STARTOON_LABS",
      })
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

module.exports = connectDB;