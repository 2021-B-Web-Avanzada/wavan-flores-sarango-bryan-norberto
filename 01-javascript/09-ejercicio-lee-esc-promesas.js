const fs = require('fs');

/*Hacer una función que se acepte como parametro una variable
* con el path del archivo y el contenido a agregar al contenido
* del archivo. La función debe tomar estos dos paramtros y leer
* el archivo y añadir el texto al final del archivo. Al final
* vamos a leer el archivo nuevamente e imprimirlo en consola.
* Todo esto con promesas
 */

function promesaLeerArchivo(path){
    const promesaLeer = new Promise(
        (resolve, reject) => {
            fs.readFile(
                path,
                'utf-8',
                 (error,contenido)=>{
                    if(error){
                      reject({mensaje:'Error leyendo contenido ',error:error});
                    }
                    else
                    {
                        resolve(contenido);
                    }
                }
            )
         }
    )
    return promesaLeer;
}

function promesaEscribirElArchivo(path, contenidoActual,nuevoContenido){
    const promesaEscribir = new Promise(
        (resolve, reject) => {
            nuevoContenido=contenidoActual +'\n'+ nuevoContenido;
            fs.writeFile(
                path,
                nuevoContenido,
                'utf-8',
                (error, nuevoContenido)=>{
                    if(error){
                        reject({mensaje:'Error escribiendo contenido ',error:error});
                    }
                }
            )
        }
    )
    return promesaEscribir;
}
function ejercicio(path, nuevoContenido){
    promesaLeerArchivo(path)
        .then((datosPromesaLeer)=>
                {
                console.log("Primera lectura---------------------------");
                console.log(datosPromesaLeer);
                promesaEscribirElArchivo(path,datosPromesaLeer,nuevoContenido)
                }
            )
        .then(
                ()=>{
                     return promesaLeerArchivo(path)
                }
            )
        .then(
            (datosPromesa) =>
            {
                console.log("Segunda lectura---------------------------");
                console.log(datosPromesa);
            }
            )
        .catch(
            (error) =>{
                console.log(error);
            }
        )
}
ejercicio('./06-ejemplo.txt', 'Buenas mañanas');



