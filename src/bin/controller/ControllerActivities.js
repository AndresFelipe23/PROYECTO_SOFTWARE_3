var mongoose = require("mongoose");
class Database {
  constructor() {}

  async connect() {
    try {
      await mongoose.connect(
        //"mongodb+srv://fraedma:fema27@cluster0-qvdtc.mongodb.net/myMusic?retryWrites=true&w=majority",
        //mongodb+srv://espitiaa321:<password>@mymusiccollection.g2tx7mk.mongodb.net/?retryWrites=true&w=majority  --MIO
        //mongodb+srv://fraedma:fema27@cluster0.yoo6yhb.mongodb.net/my_music_collection_db?retryWrites=true&w=majority

        //mongodb+srv://espitiaa321:1003403445pipe@mymusiccollection.g2tx7mk.mongodb.net/MyMusicCollection?retryWrites=true&w=majority

        "mongodb+srv://espitiaa321:1003403445pipe@proyecto.56imcgf.mongodb.net/PROYECTO?retryWrites=true&w=majority",  
        "mongodb://localhost:27017/PROYECTO",
        "mongodb+srv://espitiaa321:1003403445pipe@proyecto.56imcgf.mongodb.net/",

        //mongodb.net:27017/"MyMusicCollection"?ssl=true&replicaSet=atla

        //"mongodb://localhost:27017/my_music_collection_db",
        { useNewUrlParser: true }
      );
      console.log("Connected databases.");
    } catch (e) {
      console.error(e);
    }
  }
}

exports.database = new Database();