const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TipoActividadSchema = new Schema({
  id: String,
  name: String,
  description: String,
});

var TipoActividad = mongoose.model("TipoActividad", TipoActividadSchema);
module.exports = TipoActividad;
