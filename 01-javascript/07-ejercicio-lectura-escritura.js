const fs = require('fs');
/*
Hacer una función que me acepte como parametro una variable
con el path del archivo y el contenido a agregar al contenido
del archivo, la función debe tomar estos dos parametros y leer
el archivo y añadir el texto al final del archivo
 */
function escribirArchivo(path, contenidoNuevo){
    fs.readFile(
        path,
        'utf-8',
        (error,contenido)=>{
            if(error){
                console.error({mensaje:'Error leyendo contenido ',error:error});
            }
            else
            {
                console.log('Contenido Leído');
                console.log(contenido);
                contenidoNuevo=contenido+' '+contenidoNuevo;
                fs.writeFile(
                    path,
                    contenidoNuevo,
                    'utf-8',
                    (error, contenidoNuevo)=>{
                       if(error){
                           console.error({mensaje:'Error escribiendo contenido ',error:error});
                       }
                       else{
                           console.log("El texto ha sido escrito");
                       }
                    }

                )
            }
        }
    );
}

escribirArchivo('./07-ejemplo.txt','Prueba ');