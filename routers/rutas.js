const express = require('express');
const ruta = express.Router();
const validartoken = require('../middlewares/auth');
const Sensores = require('../models/sensor.models')

ruta.post('/sensores',(req, res)=>{

    // res.json(req.body)    

    adddato(req.body)
    .then(dato=>{
        res.json(dato)
    })
    .catch(error=>{
        res.json({
            mensaje:error
        })
    })

});

ruta.get('/sensores',(req, res)=>{

    getdatos()
    .then(dato=>{
        res.json(dato)
    })
    .catch(error=>{
        res.json({
            error:error,
            mensaje:'Error al Obtener datos de sensores'
        })
    })


})



///////functions///////
//agregar new datos
async function adddato(body){
    // return body
    let sensor = new Sensores({
        nombres:body.nombres,
        lectura:body.lectura,
        fecha:body.fecha

    });
    
    // return await sensor;
    return await sensor.save();
}

//consultar datos
async function getdatos(){
    let sensor = await Sensores.find()
    return sensor;
}


module.exports = ruta; 