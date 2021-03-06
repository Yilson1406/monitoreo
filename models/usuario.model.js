const mongoose = require('mongoose');

//schema de usuarios
const usuarios = new mongoose.Schema({

    nombres:{
        type:String,
        required:true
    },
    cedula:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },

});

module.exports = mongoose.model('Usuarios', usuarios)