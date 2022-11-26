const mongoose = require("mongoose");

const Connect = () => {
  mongoose.connect(process.env.MONGO_URI, () => {
    console.log(`Database is connected with ${process.env.MONGO_URI}`);
  });
};

module.exports = Connect;
