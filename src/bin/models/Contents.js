const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContentsSchema = new Schema({
  id: String,
  name_content: String,
  part_content: String,
  id_user: String,
  id_type_content: String
});

var Contents = mongoose.model("Contents", ContentsSchema);
module.exports = Contents;
