const { database } = require("./controller/Database");

const User = require("./models/User");
const Contents = require("./models/Contents");
const Activities = require("./models/Activities");
const Evaluation = require("./models/Evaluation");
const DetalleActividad = require("./models/DetalleAct");
const DetalleEvaluation = require("./models/DetalleEva");
const TipoActividad = require("./models/Ttipo_actividad");
const Ttipo_contenidos = require("./models/Ttipo_contenidos");
const Ttipo_usuario = require("./models/Ttipo_usuario");



class MainController {
    constructor() {
        database.connect();
    }

    //Traer todos los usuarios
    getUsers(res) {
        User.find({}, (err, users) => {
            res.send({ status: 200, users: users });
        });
    }

    //Agregar un usuario
    setUsers(users, res) {
        User.create(users, function (err, newUsers) {
            if (err) throw err;
            res.send('Usuario creado exitosamente');
        });
    }

    //Traer un usuario por su id
    getUser(id, res) {
        User.find({ _id: id }, (err, users) => {
            res.send({ status: 200, users: users });
        });
    }
    //actializar por id
    updateUsers(user, res) {
        let { id, Nombre, Apellido, Correo, passw, id_tipo_usuario } = user;
        User.updateOne(
            { _id: id },
            { $set: { Nombre: Nombre, Apellido: Apellido, Correo: Correo, passw: passw, id_tipo_usuario: id_tipo_usuario } }
        )
            .then(rawResponse => {
                res.send({ message: "User actualizado", raw: rawResponse })
            })
            .catch(err => {
                console.error(err);
                res.status(500).send('Ocurrió un error al actualizar el usuario con el id: ' + id);
            });
    }

    //eliminar por id
    deleteUser(id, res) {
        User.deleteOne({ _id: id }, function (err) {
            if (err) throw err;
            res.send({ message: "Usuario ha sido Borrado" });
        });
    }

    //-----------------------------------------------------//

    //Traer todo los contenidos
    getContents(res) {
        Contents.find({}, (err, contents) => {
            res.send({ status: 200, contents: contents });
        });
    }

    //Agregar un contenido
    setContents(contents, res) {
        Contents.create(contents, function (err, newContents) {
            if (err) throw err;
            res.send({ status: 200 });
        });
    }

    //Traer un contenido por su id    ---ERROR---
    //getActivities(id, res) {
    //    Activities.find({ _id: id }, (err, newActivities) => {
    //        res.send({ status: 200, activities: newActivities });
    //    });
    //}

    //actializar por id
    updateContents(contents, res) {
        let { id, nom, par_con, id_usuario, id_tipo_contenido } = contents;
        Contents.updateOne(
            { _id: id },
            { $set: { nom: nom, par_con: par_con, id_usuario: id_usuario, id_tipo_contenido: id_tipo_contenido } }
        )
            .then(rawResponse => {
                res.send({ message: "Contents update", raw: rawResponse })
            })
            .catch(err => {
                if (err) throw err;
            });
    }

    //eliminar contenido por id
    deleteContents(id, res) {
        Contents.deleteOne({ _id: id }, function (err) {
            if (err) throw err;
            res.send({ message: "Contenido borrado" });
        });
    }

    //-----------------------------------------------------//

    //Traer todas las actividades
    getActivities(res) {
        Activities.find({}, (err, activities) => {
            res.send({ status: 200, activities: activities });
        });
    }

    //Agregar un actividad
    setActivities(activities, res) {
        Activities.create(activities, function (err, newActivities) {
            if (err) throw err;
            res.send({ status: 200 });
        });
    }

    //Traer una actividad por su id    ---ERROR---
    //getActivities(id, res, send) {
    //    Activities.find({ _id: id }, (err, activities) => {
    //        res.send({ status: 200, activities: activities });
    //    });
    //}

    //actializar por id
    updateActivities(activities, res) {
        let { id, nom, par_actividad, id_tipo_activi } = activities;
        Activities.updateOne(
            { _id: id },
            { $set: { nom: nom, par_actividad: par_actividad, id_tipo_activi: id_tipo_activi } }
        )
            .then(rawResponse => {
                res.send({ message: "Activities update", raw: rawResponse })
            })
            .catch(err => {
                if (err) throw err;
            });
    }

    //eliminar por id
    deleteActivities(id, res) {
        Activities.deleteOne({ _id: id }, function (err) {
            if (err) throw err;
            res.send({ message: "Actividad borrada" });
        });
    }

    //-----------------------------------------------------//

    //Traer todas las evaluaciones
    getEvaluations(res) {
        Evaluation.find({}, (err, evaluation) => {
            res.send({ status: 200, evaluation: evaluation });
        });
    }

    //Agregar una evaluación
    setEvaluations(evaluations, res) {
        Evaluation.create(evaluations, function (err, newEvaluations) {
            if (err) throw err;
            res.send({ status: 200 });
        });
    }

    //Traer una actividad por su id    ---ERROR---
    //getActivities(id, res, send) {
    //    Activities.find({ _id: id }, (err, activities) => {
    //        res.send({ status: 200, activities: activities });
    //    });
    //}

    //actializar evaluacion por id
    updateEvaluations(evaluations, res) {
        let { id, nombre, tipo_evaluacion, tipo_pregunta } = evaluations;
        Evaluation.updateOne(
            { _id: id },
            { $set: { nombre: nombre, tipo_evaluacion: tipo_evaluacion, tipo_pregunta: tipo_pregunta, id_tipo_contenido: id_tipo_contenido } }
        )
            .then(rawResponse => {
                res.send({ message: "Evaluations update", raw: rawResponse })
            })
            .catch(err => {
                if (err) throw err;
            });
    }

    //eliminar por id
    deleteEvaluations(id, res) {
        Evaluation.deleteOne({ _id: id }, function (err) {
            if (err) throw err;
            res.send({ message: "Actividad borrada" });
        });
    }


//-----------------------------------------------------//

    //Traer todos los detalles de una actividad
    getDetalleActividad(res) {
        DetalleActividad.find({}, (err, DetalleAct) => {
            res.send({ status: 200, DetalleAct: DetalleAct });
        });
    }

    //Agregar un detalle de una actividad
    setDetalleActividad(detalleactividad, res) {
        DetalleActividad.create(detalleactividad, function (err, newDetalleActividad) {
            if (err) throw err;
            res.send({ status: 200 });
        });
    }

    //Traer una actividad por su id    ---ERROR---
    //getActivities(id, res, send) {
    //    Activities.find({ _id: id }, (err, activities) => {
    //        res.send({ status: 200, activities: activities });
    //    });
    //}

    //actializar evaluacion por id
    updateDetalleActividad(evaluations, res) {
        let { id, pregunta, desc_preg, opcion_uno, opcion_dos, opcion_tres, opcion_resp_correcta} = evaluations;
        DetalleActividad.updateOne(
            { _id: id },
            { $set: { pregunta: pregunta, desc_preg: desc_preg, opcion_uno: opcion_uno, opcion_dos: opcion_dos, opcion_tres: opcion_tres, opcion_resp_correcta: opcion_resp_correcta } }
        )
            .then(rawResponse => {
                res.send({ message: "DetalleActividad update", raw: rawResponse })
            })
            .catch(err => {
                if (err) throw err;
            });
    }

    //eliminar por id
    deleteDetalleActividad(id, res) {
        DetalleActividad.deleteOne({ _id: id }, function (err) {
            if (err) throw err;
            res.send({ message: "Detalle de la actividad borrada" });
        });
    }


//-----------------------------------------------------//

//Traer todos los detalles de un usuario
getTtipoUsuario(res) {
    Ttipo_usuario.find({}, (err, Ttipo_usuario) => {
        res.send({ status: 200, Ttipo_usuario: Ttipo_usuario });
    });
}

//Agregar un detalle de un usuario
setTtipoUsuario(ttipo_usuario, res) {
    Ttipo_usuario.create(ttipo_usuario, function (err, newTtipo_usuario) {
        if (err) throw err;
        res.send({ status: 200 });
    });
}

//Traer un  detalle por usuario por su id    ---ERROR---
//getActivities(id, res, send) {
//    Activities.find({ _id: id }, (err, activities) => {
//        res.send({ status: 200, activities: activities });
//    });
//}

//actializar detalle usuario por id
updateTtipoUsuario(Ttipo_usuario, res) {
    let { id, nom, ape, correo, tipous} = Ttipo_usuario;
    Ttipo_usuario.updateOne(
        { _id: id },
        { $set: { nom: nom, ape: ape, correo: correo, tipous: tipous} }
    )
        .then(rawResponse => {
            res.send({ message: "Detalle del usuario actualizada", raw: rawResponse })
        })
        .catch(err => {
            if (err) throw err;
        });
}

//eliminar por id
deleteTtipoUsuario(id, res) {
    Ttipo_usuario.deleteOne({ _id: id }, function (err) {
        if (err) throw err;
        res.send({ message: "Detalle del usuario borrada" });
    });
}

//-----------------------------------------------------//

//Traer todos los detalles de un evaluacion
getDetalleEvaluation(res) {
    DetalleEvaluation.find({}, (err, DetalleEvaluation) => {
        res.send({ status: 200, DetalleEvaluation: DetalleEvaluation });
    });
}

//Agregar un detalle de un evaluacion
setDetalleEvaluation(detalleevaluation, res) {
    DetalleEvaluation.create(detalleevaluation, function (err, newDetalleEvaluation) {
        if (err) throw err;
        res.send({ status: 200 });
    });
}

//Traer un  detalle por evaluacion por su id    ---ERROR---
//getActivities(id, res, send) {
//    Activities.find({ _id: id }, (err, activities) => {
//        res.send({ status: 200, activities: activities });
//    });
//}

//actializar detalle evaluacion por id
updateDetalleEvaluation(DetalleEvaluation, res) {
    let { id, ask, desc_ask, opt_one, opt_two, opt_three, opt_answ_correct} = DetalleEvaluation;
    DetalleEvaluation.updateOne(
        { _id: id },
        { $set: { ask: ask, desc_ask: desc_ask, opt_one: opt_one, opt_two: opt_two, opt_three: opt_three, opt_answ_correct: opt_answ_correct} }
    )
        .then(rawResponse => {
            res.send({ message: "Detalle de la evaluacion actualizada", raw: rawResponse })
        })
        .catch(err => {
            if (err) throw err;
        });
}

//eliminar por id
deleteDetalleEvaluation(id, res) {
    DetalleEvaluation.deleteOne({ _id: id }, function (err) {
        if (err) throw err;
        res.send({ message: "Detalle de la evaluacion borrada" });
    });
}


//-----------------------------------------------------//

//Traer todos los tipos de actividades
getTipoActividad(res) {
    TipoActividad.find({}, (err, TipoActividad) => {
        res.send({ status: 200, TipoActividad: TipoActividad });
    });
}

//Agregar un tipo de actividades
setTipoActividad(tipoactividad, res) {
    TipoActividad.create(tipoactividad, function (err, newTipoActividad) {
        if (err) throw err;
        res.send({ status: 200 });
    });
}

//Traer un  detalle por evaluacion por su id    ---ERROR---
//getActivities(id, res, send) {
//    Activities.find({ _id: id }, (err, activities) => {
//        res.send({ status: 200, activities: activities });
//    });
//}

//actializar tipos de actividades por id
updateTipoActividad(tipoactividad, res) {
    let { id, name, description} = tipoactividad;
    TipoActividad.updateOne(
        { _id: id },
        { $set: { name: name, description: description} }
    )
        .then(rawResponse => {
            res.send({ message: "Tipo de actividad actualizada", raw: rawResponse })
        })
        .catch(err => {
            if (err) throw err;
        });
}

//eliminar por id
deleteTipoActividad(id, res) {
    TipoActividad.deleteOne({ _id: id }, function (err) {
        if (err) throw err;
        res.send({ message: "Tipo de actividad borrada" });
    });
}


//-----------------------------------------------------//

//Traer todos los tipos de actividades
getTipoContenido(res) {
    Ttipo_contenidos.find({}, (err, Ttipo_contenidos) => {
        res.send({ status: 200, Ttipo_contenidos: Ttipo_contenidos });
    });
}

//Agregar un tipo de contenidos
setTipoContenido(tipocontenidos, res) {
    Ttipo_contenidos.create(tipocontenidos, function (err, newTipoContenido) {
        if (err) throw err;
        res.send({ status: 200 });
    });
}

//Traer un  detalle por evaluacion por su id    ---ERROR---
//getActivities(id, res, send) {
//    Activities.find({ _id: id }, (err, activities) => {
//        res.send({ status: 200, activities: activities });
//    });
//}

//actializar tipos de actividades por id
updateTipoContenido(tipocontenidos, res) {
    let { id, name_con, description} = tipocontenidos;
    Ttipo_contenidos.updateOne(
        { _id: id },
        { $set: { name_con: name_con, description: description} }
    )
        .then(rawResponse => {
            res.send({ message: "Tipo de actividad actualizada", raw: rawResponse })
        })
        .catch(err => {
            if (err) throw err;
        });
}

//eliminar por id
deleteTipoContenido(id, res) {
    Ttipo_contenidos.deleteOne({ _id: id }, function (err) {
        if (err) throw err;
        res.send({ message: "Tipo de contenido borrada" });
    });
}


}

exports.MainController = new MainController();