const mongoose = require("mongoose");
const AuthenticateModel = mongoose.Schema({
  password: { type: String, required: true },
  email: { type: String, required: true },
  Name: { type: String, required: true },
});
exports.Authenticate = mongoose.model("Authenticate", AuthenticateModel);
