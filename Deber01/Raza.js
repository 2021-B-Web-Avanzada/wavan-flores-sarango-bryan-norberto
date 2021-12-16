const lineReader = require("line-reader");
const tokenizer = require("./Lib/Tokenizer.js");
const fs = require('fs');
const fsPromises = fs.promises
const prompt = require('prompt');
const archivos = require("./Archivos.js");

class Raza{
    constructor(path,nombreP,origenP,existenP,tamanoP,pesoP)
    {
        this.crearF =  new archivos(path);
        this.id='';
        this.nombre=nombreP;
        this.origen=origenP;
        this.existencia=existenP;
        this.tamano=tamanoP;
        this.peso=pesoP;
    }
    //PROBADA
    //CREAR
    crear(){
        this.crearF.asignarIndice().then((datos)=>{
            let raza =datos+' '+this.nombre+' '+this.origen+' '+this.existencia+' '+this.tamano+' '+this.peso;
            this.crearF.escribirArchivo(raza);
        });
    }
    //PROBADA
    //ELIMINAR
    eliminar(){
        this.crearF.leerArchivo().then((datos)=>{
            console.log(datos);
            return this.crearF.leerConsolaID();
        }).then((datos)=>{
            this.crearF.eliminar(datos);
        });
    }
    //PROBADA
    //leer
    leer(){
        this.crearF.leerArchivo().then((datos)=>console.log(datos));
    }
    //PROBADA
    //ACTUALIZA UN REGISTRO
    actualizar(){
        this.crearF.leerArchivo().then((datos)=>{
            console.log(datos);
            return this.crearF.leerConsola();
        }).then((datos)=>{
            this.crearF.actualizar(datos[0],datos);
        });
    }
}

module.exports = Raza;