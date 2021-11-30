//06-callbacks.js

const fs = require('fs'); //file system
//06-ejemplo.txt ► Hola
console.log('PRIMERO');
fs.readFile(
    './06-ejemplo.txt',
    'utf-8',
    (error,contenido)=>{
            if(error){
                    console.error({mensaje:'Error leyendo contenido 06 ejemplo txt',error:error});
            }
            else
            {
                console.log('SEGUNDO 1-----------------------------------');
                console.log(contenido);
                fs.readFile(
                    './01-variables.js',
                    'utf-8',
                    (error,contenido)=>{
                        if(error){
                            console.error({mensaje:'Error leyendo contenido 01 variable',error:error});
                        }
                        else
                        {
                            console.log('SEGUNDO 2---------------------------------------');
                            console.log(contenido);
                        }
                    }
                );
            }
}
);
console.log('TERCERO');
