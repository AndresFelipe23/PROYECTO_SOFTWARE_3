const routes = require("./bin/routes");
const { app } = require("./bin/routes");
const mongoose = require("mongoose");


app.listen(3005, () => {
console.log("Server on port http://localhost:3005");
});