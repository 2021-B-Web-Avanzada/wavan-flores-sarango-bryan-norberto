const lineReader = require("line-reader");
const tokenizer = require("./Lib/Tokenizer.js");
const fs = require('fs');
const fsPromises = fs.promises
const prompt = require('prompt');


class Archivos{
    constructor(archivoParametro){
        this.archivo=archivoParametro;
    }

    //PROBADA
    //Toma una linea y la tokeniza por espacios y palabras
    tokenizar(linea){
        let tokenizer = require('./Lib/Tokenizer.js');
        tokenizer.debug = true;
        tokenizer.rule('whitespace', /^\s+/);
        tokenizer.rule('word', /^[^\s]+/);
        let token = tokenizer.tokenize(linea);
        return token;
    }

    //PROBADA
    //elimina una linea del archivo
    eliminar(indice){
        const promesaActualizar = new Promise(
            (resolve,reject)=>{
                this.buscarIndice(indice).then(
                    (datosPromesa)=>{
                        if(datosPromesa==true){

                            this.leerArchivo().then(
                                (datos)=>
                                {

                                    let letra='';
                                    let posicion=0;
                                    let puntero=1;
                                    while(letra!=(indice+' ')){
                                        letra=datos[posicion]+' ';
                                        posicion++;
                                        if(letra=='\n '){
                                            puntero++;
                                        }
                                    }
                                    this.editar(puntero,"").then((datos)=>{
                                        this.escribirParaActualizar(datos);
                                        console.log('Se ha eliminado el registro');
                                    })
                                }
                            )
                        }
                    }
                )
            }
        )
        return promesaActualizar;
    }

    //PROBADA
    //actualiza un registro
    actualizar(indice,linea){
        const promesaActualizar = new Promise(
            (resolve,reject)=>{
                this.buscarIndice(indice).then(
                    (datosPromesa)=>{
                        if(datosPromesa==true){
                            this.leerArchivo().then(
                                (datos)=>
                                {
                                    let letra='';
                                    let posicion=0;
                                    let puntero=1;
                                    while(letra!=(indice+' ')){
                                        letra=datos[posicion]+' ';
                                        posicion++;
                                        if(letra=='\n '){
                                            puntero++;
                                        }
                                    }
                                    this.editar(puntero,linea).then((datos)=>{
                                        this.escribirParaActualizar(datos);
                                        console.log('Se ha actualizado el registro');
                                    })
                                }
                            )
                        }
                    }
                )
            }
        )
        return promesaActualizar;
    }

    //PROBADA
    //tomar datos solo para editar
    editar(posicion,linea){
        posicion=posicion-1;
        const promesaEditar = new Promise(
            (resolve,reject)=>{
                let contador=0;
                let arreglo ='';
                lineReader.eachLine(this.archivo,function(line, last) {
                    if(contador<posicion){
                        arreglo=arreglo+line+'\n';
                    }
                    if(contador==posicion){
                        arreglo=arreglo+linea+'\n';
                        // console.log(arreglo);
                    }
                    if(contador>posicion){
                        arreglo=arreglo+line+'\n';
                    }
                    if(last){// or check if it's the last one
                        resolve(arreglo);
                    }
                    contador++;
                });
            }

        )
        return promesaEditar;
    }
    //PROBADA
    asignarIndice() {
        const promesaAsignarIndice = new Promise(
            (resolve,reject)=>
            {
                this.buscarIndice('x').then((datosPromesa)=> {
                    if (datosPromesa !='') {
                        resolve (parseInt(datosPromesa)+1);
                    }
                });
            }

        )
        return promesaAsignarIndice;
    }

    //Buscar la linea con ese indice, si existe devuelve verdadero
    //PROBADA
    buscarIndice(indice) {
        const promesaBuscarIndice = new Promise(
            (resolve,reject)=>{
                const lineReader = require('line-reader');
                lineReader.eachLine(this.archivo,(line,last)=>{
                    if((this.tokenizar(line))[0]==indice){
                        resolve(true);
                    }
                    if(last==true){
                        resolve(this.tokenizar(line)[0]);
                    }

                })
            }

        )
        return promesaBuscarIndice;
    }
    //PROBADA
    insertar( contenidoActual,nuevoContenido){
        const promesaEscribir = new Promise(
            (resolve, reject) => {
                nuevoContenido=contenidoActual +'\n'+ nuevoContenido;
                fs.writeFile(
                    this.archivo,
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

    //PROBADA
    escribirParaActualizar(nuevoContenido){
        const promesaEscribir = new Promise(
            (resolve, reject) => {
                fs.writeFile(
                    this.archivo,
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

    //PROBADA
    leerArchivo(){
        const promesaLeer = new Promise(
            (resolve, reject) => {
                fs.readFile(
                    this.archivo,
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

    //PROBADA
    escribirArchivo(nuevoContenido) {

        this.leerArchivo(this.archivo)
            .then((datosPromesaLeer) => {
                    //  console.log(datosPromesaLeer);
                    this.insertar( datosPromesaLeer, nuevoContenido);
                    console.log('Se ha guardado el registro');
                }
            )
    }

    //PROBADA
    leerConsola(){
        console.log('Estoy leyendo');
        const promesaLeerConsola = new Promise(

            (resolve,reject)=>{
                prompt.start();
                prompt.get(['id','nombre','origen','existencia','tamano','peso'], function (err, result) {
                    if (err) { return onErr(err); }
                    let linea=result.id+' '+result.nombre+' '+result.origen+' '+result.existencia+' '+result.tamano+' '+result.peso+'';
                    resolve(linea);
                });

                function onErr(err) {
                    console.log(err);
                    return 1;
                }
            }
        )
        return promesaLeerConsola;
    }

    leerConsolaID(padreId){
        const promesaLeerConsola = new Promise(
            (resolve,reject)=>{
                prompt.start();
                prompt.get(['id'], function (err, result) {
                    if (err) { return onErr(err); }
                    let id=result.id;
                    resolve(id);
                });

                function onErr(err) {
                    console.log(err);
                    return 1;
                }
            }
        )
        return promesaLeerConsola;
    }

    //PROBADA
    leerConsolaMascota(idPadre){
        const promesaLeerConsola = new Promise(
            (resolve,reject)=>{
                let id=idPadre;
                prompt.start();
                prompt.get(['id','nombre','edad','numeroVacunas','dueno','residenciaDueno'], function (err, result) {
                    if (err) { return onErr(err); }
                    let linea=result.id+' '+ id+' '+result.nombre+' '+result.edad+' '+result.numeroVacunas+' '+result.dueno+' '+result.residenciaDueno+'';
                    resolve(linea);
                });

                function onErr(err) {
                    console.log(err);
                    return 1;
                }
            }
        )
        return promesaLeerConsola;
    }

}

module.exports= Archivos;



