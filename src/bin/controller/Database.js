var mongoose = require("mongoose");

class Database {
  constructor() {}

  async connect() {
    try {
      await mongoose.connect(

        "mongodb+srv://espitiaa321:1003403445pipe@proyecto.56imcgf.mongodb.net/PROYECTO?retryWrites=true&w=majority", 

        { useNewUrlParser: true }
      );
      console.log("Connected databases.");
    } catch (e) {
      console.error(e);
    }
  }
}

exports.database = new Database();




















