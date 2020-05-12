const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {

    let data = JSON.stringify( listadoPorHacer );

    fs.writeFile( './db/data.json', data, ( err ) => {
        if ( err ) 
            throw new Error('Error al escribir en el archivo ', err);
    })

}

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');        
    } catch (error) {
        listadoPorHacer = [];
    } 

}

const crear = ( descripcion ) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push( porHacer );

    guardarDB();

    return porHacer;

}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = ( descripcion, completado ) => {
    cargarDB();

    let tarea = listadoPorHacer.find( resp => resp.descripcion === descripcion);
    //let tareaIndex = listadoPorHacer.findIndex( resp => resp.descripcion === descripcion)
    // listadoPorHacer[tareaIndex].completado = completado

    if( tarea ){

        tarea.completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }

}

const borrar = ( descripcion ) => {
    cargarDB();

    let tareaIndex =  listadoPorHacer.findIndex( resp => resp.descripcion === descripcion );

    if( tareaIndex >= 0){
        listadoPorHacer.splice(tareaIndex, 1);
        guardarDB();
        return true;
    } else {
        return false;
    }
}

module.exports = {
    crear,
    actualizar,
    getListado,
    borrar
}