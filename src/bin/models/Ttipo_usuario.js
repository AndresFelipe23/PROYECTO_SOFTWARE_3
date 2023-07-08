const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Ttipo_usuarioSchema = new Schema({
  id: String,
  name: String,
  last_name: String,
  email: String,
  user_type: String
});

var Ttipo_usuario = mongoose.model("Ttipo_usuario", Ttipo_usuarioSchema);
module.exports = Ttipo_usuario;
