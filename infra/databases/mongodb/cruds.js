const { mongoConn } = require("../../../configs");
const { biopicSchema } = require("./schema/biopics");

exports.allMongoModels = {
   order: mongoConn.model("biopics", biopicSchema),
};
