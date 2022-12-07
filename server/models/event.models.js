const mongoose = require("mongoose");

const SchemaEvent = new mongoose.Schema({
    Name: {
        type: String,
        required: [true, "Debes agregarle un nombre a tu evento"], // cuales son los lenguajes
        minLength: [3, "Debe tener al menos 3 caracteres"]
    },
    Description:{
        type: String,
        required: [true, "Debes Ingresar una breve descripción"],
        minLength: [3, "Debe tener al menos 3 caracteres"]
    },
    Type:{
        type: String,
        required: [true, "Debes Elegir tu tipo de evento"],
    },
    Date:{
        type: String,
        required: [true, "Debes Ingresar una Fecha"],
        minLength: [3, "Debe tener al menos 3 caracteres"]
    },
    Ubication:{// depende de la api a usar 
        type: String,
        required: [true, "Debes Ingresar una ubicación"],
        minLength: [3, "Debe tener al menos 3 caracteres"]
    },
    Food:{
        type: Array

    },
    Decoration:{
        type: Array
    },
    Music:{
        type: Array
    },
    Phothos:{
        type: Array
        // deberia ser array con dos campos ejem: ["fulanito el que lo va a hacer", false]
        // el nombre del que posiblemnte lo va a hacer y al lado check box de si ya lo consiguio o no 
        //y que si no le recuerde cada tanto 
    },
    Organizer: {
        type: mongoose.Schema.Types.ObjectId,
        ref : "Users"
    },


},{timestamps: true , versionKey: false})





//timestamps: true es para createdAt y updatedAtrsionKe y: false es para eliminar un campo _v
const Events = mongoose.model("Events", SchemaEvent);
module.exports = Events;   
