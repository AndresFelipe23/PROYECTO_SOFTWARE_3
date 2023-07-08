const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EvaluationSchema = new Schema({
  id: String,
  name: String,
  type_evaluation: String,
  type_ask: String
});

var Evaluation = mongoose.model("Evaluation", EvaluationSchema);
module.exports = Evaluation;
