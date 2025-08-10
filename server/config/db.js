// MongoDB connection setup
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = async () => {
    const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/ready-boilerplate-MERN-Project';
  try {
    const conn = await mongoose.connect(MONGO_URI
    //     , 
    //     {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // }
);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
