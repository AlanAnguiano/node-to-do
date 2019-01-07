const opc = {
    demand: true,
    alias: "d",
    description: "descripcion de la tarea por hacer"
}
const completado = {
    alias: "c",
    default: true,
    description: "marca como completado una tarea"
}
const argv = require('yargs')
                .command("crear","crea una nueva tarea por hacer",{
                    opc
                })
                .command("actualizar", "actualiza a completado una tarea",{
                    opc,
                    completado
                })
                .command("borrar", "borra una tarea existente",{
                    opc
                })
                .help()
                .argv;
module.exports = {
    argv
}