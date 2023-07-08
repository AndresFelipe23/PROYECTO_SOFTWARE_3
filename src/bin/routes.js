const express = require("express");
const app = express();
const { MainController } = require("./MainController");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

//Pagina principalñ.
app.get("/", function (req, res) {
    res.send("Mi proyecto del curso");
});

//-----------------------------------------------------//

//Traer todos los usuarios
app.get("/users", function (req, res) {
    MainController.getUsers(res);
});

//Agregar un usuario
app.post("/users", function (req, res) {
    let { users } = req.body;
    console.log(req.body);
    MainController.setUsers(users, res);
});

//Traer un usuario por su id
app.get("/users/id", function (req, res) {
    let { id } = req.params;
    MainController.getUser(id, res);
});
// acualizar usuario por Id
app.put("/users/:id", function (req, res) {
    let users = req.body.users;
    users.id = req.params.id;
    MainController.updateUsers(users, res);
});

//Eliminar un Usuario por su id
app.delete("/users/:id", function (req, res) {
    let { id } = req.params;
    req.params.id;
    MainController.deleteUser(id, res);
});

//-----------------------------------------------------//

//Traer todos los contenidos
app.get("/contents", (req, res) => {
    MainController.getContents(res);
});

//Agregar una actividad
app.post("/contents", function (req, res) {
    let { contents } = req.body;
    console.log(req.body);
    MainController.setContents(contents, res);
});

//Traer un usuario por su id
app.get("/contents/:id", function (req, res) {
    let { id } = req.params;
    MainController.getContents(id, res);
});

// acualizar contenido por Id
app.put("/contents/:id", function (req, res) {
    let contents = req.body.contents;
    contents.id = req.params.id;
    MainController.updateContents(contents, res);
});

//Eliminar un contenido por su id
app.delete("/contents/:id", function (req, res) {
    let { id } = req.params;
    req.params.id;
    MainController.deleteContents(id, res);
});

//-----------------------------------------------------//

//Traer todas las actividades
app.get("/activities", (req, res) => {
    MainController.getActivities(res);
});

//Agregar una actividad
app.post("/activities", function (req, res) {
    let { activities } = req.body;
    console.log(req.body);
    MainController.setActivities(activities, res);
});

//Traer un usuario por su id   ---ERROR---
//app.get("/activities/:id", function(req, res) {
//    let { id } = req.params;
//    MainController.getActivities(id, res, send);
//});

// acualizar actividad por Id
app.put("/activities/:id", function (req, res) {
    let activities = req.body.activities;
    activities.id = req.params.id;
    MainController.updateActivities(activities, res);
});

//Eliminar una actividad por su id
app.delete("/activities/:id", function (req, res) {
    let { id } = req.params;
    req.params.id;
    MainController.deleteActivities(id, res);
});

//-----------------------------------------------------//

//Traer todas las evaluaciones
app.get("/evaluations", (req, res) => {
    MainController.getEvaluations(res);
});

//Agregar una evaluacion
app.post("/evaluations", function (req, res) {
    let { evaluations } = req.body;
    console.log(req.body);
    MainController.setEvaluations(evaluations, res);
});

//Traer una evaluacion por su id   ---ERROR---
//app.get("/evaluations/:id", function(req, res) {
//    let { id } = req.params;
//    MainController.getActivities(id, res, send);
//});

// acualizar evaluacion por Id
app.put("/evaluations/:id", function (req, res) {
    let evaluations = req.body.evaluations;
    evaluations.id = req.params.id;
    MainController.updateEvaluations(evaluations, res);
});

//Eliminar una actividad por su id
app.delete("/evaluations/:id", function (req, res) {
    let { id } = req.params;
    req.params.id;
    MainController.deleteEvaluations(id, res);
});


//-----------------------------------------------------//

//Traer todos los detalles de actividad
app.get("/detalleactividad", (req, res) => {
    MainController.getDetalleActividad(res);
});

//Agregar un detalle a la actividad
app.post("/detalleactividad", function (req, res) {
    let { detalleactividad } = req.body;
    console.log(req.body);
    MainController.setDetalleActividad(detalleactividad, res);
});

//Traer una evaluacion por su id   ---ERROR---
//app.get("/evaluations/:id", function(req, res) {
//    let { id } = req.params;
//    MainController.getActivities(id, res, send);
//});

// acualizar detalles por Id
app.put("/detalleactividad/:id", function (req, res) {
    let DetalleActividad = req.body.DetalleActividad;
    DetalleActividad.id = req.params.id;
    MainController.updateDetalleActividad(DetalleActividad, res);
});

//Eliminar un detalle por su id
app.delete("/detalleactividad/:id", function (req, res) {
    let { id } = req.params;
    req.params.id;
    MainController.deleteDetalleActividad(id, res);
});

//-----------------------------------------------------//

//Traer todos los detalles de una evaluacion
app.get("/detalleevalaucion", (req, res) => {
    MainController.getDetalleActividad(res);
});

//Agregar un detalle a una evaluacion
app.post("/detalleevalaucion", function (req, res) {
    let { detalleevalaucion } = req.body;
    console.log(req.body);
    MainController.setDetalleActividad(detalleevalaucion, res);
});

//Traer una evaluacion por su id   ---ERROR---
//app.get("/evaluations/:id", function(req, res) {
//    let { id } = req.params;
//    MainController.getActivities(id, res, send);
//});

// acualizar detalles de una evaluacion por Id
app.put("/detalleevalaucion/:id", function (req, res) {
    let detalleevalaucion = req.body.detalleevalaucion;
    detalleevalaucion.id = req.params.id;
    MainController.updateDetalleActividad(detalleevalaucion, res);
});

//Eliminar un detalle de una evaluacion por su id
app.delete("/detalleactividad/:id", function (req, res) {
    let { id } = req.params;
    req.params.id;
    MainController.deleteDetalleActividad(id, res);
});


//-----------------------------------------------------//

//Traer todos los detalles de usuario
app.get("/ttipousuario", (req, res) => {
    MainController.getTtipoUsuario(res);
});

//Agregar un detalle a una evaluacion
app.post("/ttipousuario", function (req, res) {
    let { ttipousuario } = req.body;
    console.log(req.body);
    MainController.setTtipoUsuario(ttipousuario, res);
});

//Traer una evaluacion por su id   ---ERROR---
//app.get("/ttipousuario/:id", function(req, res) {
//    let { id } = req.params;
//    MainController.getTtipoUsuario(id, res, send);
//});

// acualizar detalles de una evaluacion por Id
app.put("/ttipousuario/:id", function (req, res) {
    let ttipousuario = req.body.ttipousuario;
    ttipousuario.id = req.params.id;
    MainController.updateTtipoUsuario(ttipousuario, res);
});

//Eliminar un detalle de una evaluacion por su id
app.delete("/ttipousuario/:id", function (req, res) {
    let { id } = req.params;
    req.params.id;
    MainController.deleteTtipoUsuario(id, res);
});

//-----------------------------------------------------//


//Traer todos los detalles de usuario
app.get("/detalleevaluation", (req, res) => {
    MainController.getDetalleEvaluation(res);
});

//Agregar un detalle a una evaluacion
app.post("/detalleevaluation", function (req, res) {
    let { detalleevaluation } = req.body;
    console.log(req.body);
    MainController.setDetalleEvaluation(detalleevaluation, res);
});

//Traer una evaluacion por su id   ---ERROR---
//app.get("/ttipousuario/:id", function(req, res) {
//    let { id } = req.params;
//    MainController.getTtipoUsuario(id, res, send);
//});

// acualizar detalles de una evaluacion por Id
app.put("/detalleevaluation/:id", function (req, res) {
    let detalleevaluation = req.body.detalleevaluation;
    detalleevaluation.id = req.params.id;
    MainController.updateDetalleEvaluation(detalleevaluation, res);
});

//Eliminar un detalle de una evaluacion por su id
app.delete("/detalleevaluation/:id", function (req, res) {
    let { id } = req.params;
    req.params.id;
    MainController.deleteDetalleEvaluation(id, res);
});

//-----------------------------------------------------//


//Traer todos los tipos de actividades
app.get("/tipoactividad", (req, res) => {
    MainController.getTipoActividad(res);
});

//Agregar un tipo de actividades
app.post("/tipoactividad", function (req, res) {
    let { tipoactividad } = req.body;
    console.log(req.body);
    MainController.setTipoActividad(tipoactividad, res);
});

//Traer una evaluacion por su id   ---ERROR---
//app.get("/tipoactividad/:id", function(req, res) {
//    let { id } = req.params;
//    MainController.getTtipoUsuario(id, res, send);
//});

// acualizar tipos de actividades por Id
app.put("/tipoactividad/:id", function (req, res) {
    let tipoactividad = req.body.tipoactividad;
    tipoactividad.id = req.params.id;
    MainController.updateTipoActividad(tipoactividad, res);
});

//Eliminar un tipo de actividades por su id
app.delete("/tipoactividad/:id", function (req, res) {
    let { id } = req.params;
    req.params.id;
    MainController.deleteTipoActividad(id, res);
});

//-----------------------------------------------------//


//Traer todos los tipos de contenidos
app.get("/tipocontenido", (req, res) => {
    MainController.getTipoContenido(res);
});

//Agregar un tipo de contenidos
app.post("/tipocontenido", function (req, res) {
    let { tipocontenido } = req.body;
    console.log(req.body);
    MainController.setTipoContenido(tipocontenido, res);
});

//Traer una evaluacion por su id   ---ERROR---
//app.get("/tipocontenido/:id", function(req, res) {
//    let { id } = req.params;
//    MainController.getTtipoUsuario(id, res, send);
//});

// acualizar tipos de contenidos por Id
app.put("/tipocontenido/:id", function (req, res) {
    let tipocontenido = req.body.tipocontenido;
    tipocontenido.id = req.params.id;
    MainController.updateTipoContenido(tipocontenido, res);
});

//Eliminar un tipo de contenidos por su id
app.delete("/tipocontenido/:id", function (req, res) {
    let { id } = req.params;
    req.params.id;
    MainController.deleteTipoContenido(id, res);
});

//-----------------------------------------------------//

exports.app = app;