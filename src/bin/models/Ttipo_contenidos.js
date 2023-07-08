const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TipoContenidoSchema = new Schema({
  id: String,
  name_con: String,
  description: String,
});

var Ttipo_contenidos = mongoose.model("Ttipo_contenidos", TipoContenidoSchema);
module.exports = Ttipo_contenidos;
