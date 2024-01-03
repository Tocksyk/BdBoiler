const { mongoConn } = require("../../../../configs");

exports.biopicSchema = new mongoConn.Schema({}, { strict: false });
