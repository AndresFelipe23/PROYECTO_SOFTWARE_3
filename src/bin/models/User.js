const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  last_name: String,
  email: String,
  password: String,
  id_type_user: String
});

var User = mongoose.model("User", UserSchema);
module.exports = User;
