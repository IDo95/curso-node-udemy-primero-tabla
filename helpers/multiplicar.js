const color = require('colors');
const fs = require('fs'); //se revisa en la documentacion

/*const creararchivo = (base) => {

    const promesa = new Promise((resolve, reject) => {

        try {
            let salida = `\n======== TABLA DEL ${base} =========\n\n`;
            //console.log(``)
            for (let index = 1; index <= 10; index++) {
                salida += `  ${base} x ${index} = ${base*index}\n`;
            };
            console.log(salida);


            fs.writeFileSync(`tabla-del-${base}.txt`, salida);
            resolve(`tabla-del-${base}.txt`);
        } catch (error) {
            reject(error);
        }



    })
    return promesa;


}*/













//LA PARTE DE ARRIBA SE AH CREADO CON PROMESAS A CONTINUACION EL MISMO PROCESO PERO CONVIRTIENDO UNA FUNCION ASYNC


const creararchivo = async(base, l, h) => {



    try {
        let salida = `\n======== TABLA DEL ${base} =========\n\n`;
        //console.log(``)
        for (let index = 1; index <= h; index++) {
            salida += `  ${base} x ${index} = ${base*index}\n`.blue.bold;
        };

        if (l == 1) {
            console.log(salida);
        }



        fs.writeFileSync(`./salida/tabla-del-${base}.txt`, salida);
        return `tabla-del-${base}.txt`;
    } catch (error) {
        throw error;
    }





}


module.exports = {
    creararchivo: creararchivo // o se puede simplificar a simplemente ponerle crear archivo (ya que estoy asignando un nombre a algo q tiene el mismo nombre)
};