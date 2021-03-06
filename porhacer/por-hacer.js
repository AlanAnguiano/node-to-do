const fs = require('fs');
let listadoPorHacer = [];

const guardarDB = () =>{
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json',data,err =>{
        if(err){
            throw new Error("no se pudo grabar");
        }
    })
}
const cargarDB= ()=>{
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}
const crear = (desc) =>{
    cargarDB();
    let porHacer ={
        desc,
        completado: false
    }
    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}
const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}
const actualizar = (descripcion, completado = true) =>{
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.desc === descripcion);
    if(index >= 0){
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }else{
        return false;
    }
}
const borrar = (descripcion) =>{
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.desc === descripcion);
    if (index >= 0) {
        listadoPorHacer.splice(index,1);
        guardarDB();
        return true;
    } else {
        return false;
    }
    
}
module.exports = {
    crear,
    actualizar,
    borrar,
    getListado
}