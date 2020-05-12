
const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
};

const argv = require('yargs')
             .command( 'crear', 'Crear un elemento por hacer',
             {
                descripcion
             })
             .command( 'actualizar', 'Actualiza el estado de completado de una tarea',
             {
                descripcion,
                 completado
             })
             .command( 'borrar', 'Borra un tarea por hacer',
             {
                 descripcion
             
             })
             .command( 'listar', 'Lista las tareas', {
                 completado: {
                     alias: 'c',
                     desc: 'Lista las tareas según sean completadas o no'
                 }
             })
             .help()
             .argv;

module.exports = {
    argv
}