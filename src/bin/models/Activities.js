const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ActivitiesSchema = new Schema({
  id: String,
  name: String,
  part_activity: String,
  id_type_activity: String
});

var Activities = mongoose.model("Activities", ActivitiesSchema);
module.exports = Activities;
