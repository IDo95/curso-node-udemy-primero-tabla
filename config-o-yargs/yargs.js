//const yargs = require('yargs');

//const { argv } = require('yargs');

//const argv = process.argv
//const [, , argv] = process.argv;
//console.clear();
const yargs = require('yargs')

.option('b', {
        alias: 'base',
        demandOption: true,
        type: 'number',
        describe: 'es la base de la tabla de multiplicar'
    })
    .check((yargs, option) => {
        if (isNaN(yargs.base)) {
            throw 'la base tiene que ser un numero';
        }
        return true;
    })
    .option('l', {
        alias: 'listar',
        demandOption: false,
        default: false,
        type: 'boolean',
        describe: 'muestra en consola la tabla generada'
    })
    .option('h', {
        alias: 'hasta',
        demandOption: false,
        default: 10,
        type: 'number',
        describe: 'hasta que numero desea la multiplicacion'
    })
    //otros ejemplos de confirguracion de opcione de argvs
    /*    .option('l', {
            alias: 'lista',
            type: 'array'
        })
        .option('h', {
            alias: 'help'
        })*/

.argv; // como se ve en la documentacion de yargs ese argv es al final...

module.exports = yargs; //en este caso solo se exporta argv porque es el objeto que queremos usar en app