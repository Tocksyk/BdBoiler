require("dotenv").config();
const { appConfigs } = require("./configs");

appConfigs().then((configs) => {
   const app = require("./app");
   app.listen(process.env.port, () => {
      console.log(`Server Started on ${process.env.port} ...`);
   });
});
