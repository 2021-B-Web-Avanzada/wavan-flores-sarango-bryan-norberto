//10-async-await

const promesaLeerArchivo=()=>{
    return new Promise(
        (res,rej)=>{
            res('CONTENIDO LEER ARCHIVO');
        }
    );
}

const promesaEscribirArchivo = ()=>{
    return new Promise(
        (res,rej)=>{
            res('CONTENIDO ESCRIBIR ARCHIVO');
        }
    );
}

//ASYNC AWAIT
// 1)Metodos de clase
// 2)Función
// ESTO NO ES POSIBLE
// PORQUE NO ESTÁ DENTRO DE UNA Funciónconst respuesta = await promesaEscribirArchivo()

const ejemplo1 = async function(){}
const ejemplo2 = async()=>{}
async function ejercicio(){
    console.log('1');
    try{
        console.log('2');
        const contenidoArchivoActual = await promesaLeerArchivo();
        console.log(contenidoArchivoActual);
        console.log('3');
        await promesaEscribirArchivo();
        console.log('4');
        const nuevoContenido = await promesaLeerArchivo();
        console.log(nuevoContenido);
        console.log('5');
    }
    catch(error){
        console.log(error);
    }
    console.log('6');
    console.log('7');
}
ejercicio()
    .then(
        (data)=>{
            console.log('ESTA ES LA RESPUESTA DEL ASYNC AWAIT ', data);
        }
    )
    .catch()
    .finally()