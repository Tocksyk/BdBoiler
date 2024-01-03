const { default: mongoose } = require("mongoose");

exports.appConfigs = async () => {
   const c = await mongoose.connect(process.env.mongo, { dbName: process.env.db });
   module.exports = {
      mongoConn: c,
      port: 5000,
   };
   return;
};
