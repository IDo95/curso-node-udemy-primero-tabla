const { creararchivo } = require('./helpers/multiplicar');
const yargs = require('./config-o-yargs/yargs');
const color = require('colors');
const colorsf = require('colors/safe');
/* A CONTINUACION DE OBTUVO EL NUMERO DEL VALOR ENVIADO SIN EL USO DE YARGS Y DESPUES CON EL USO DE ELLOS */
/*
try {
    const [, , arg3] = process.argv;
    const [, b] = arg3.split('=')
        //console.log(arg3);
    var base = b;
    //   console.log(b);
} catch (error) {
    console.log('error');
}*/

/*


console.log('h'.yellow.bgYellow); ///one way to do it
console.log('o'.blue.bgYellow);
console.log(colorsf.green.bgBlue('l')); //other else way to do the same thing
console.log(colorsf.green.bgBlue('a'));
//  ESE HOLA SOLO ES PARA PROBAR LOS COLORES


*/

creararchivo(yargs.base, yargs.listar, yargs.hasta)

.then(resultado => console.log(` el archivo ${resultado} a sido creado`.trap.rainbow))
    .catch(err => console.log(`el archivo no ah sido creado por ${err}`.red));

//console.log(argv);
/*\\console.log(yargs);
console.log('base de yargs: ', yargs.base);*/