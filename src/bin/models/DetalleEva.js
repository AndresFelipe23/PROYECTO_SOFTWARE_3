const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DetalleEvaluationSchema = new Schema({
  id: String,
  ask: String,
  desc_ask: String,
  opt_one: String,
  opt_two: String,
  opt_three: String,
  opt_answ_correct: String
});

var DetalleEvaluation = mongoose.model("DetalleEvaluation", DetalleEvaluationSchema);
module.exports = DetalleEvaluation;
