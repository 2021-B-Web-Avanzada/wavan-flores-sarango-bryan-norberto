const lineReader = require("line-reader");
const tokenizer = require("./Lib/Tokenizer.js");
const fs = require('fs');
const fsPromises = fs.promises
const prompt = require('prompt');
const archivos = require("./Archivos.js");
const raza = require('./Raza.js');

class Mascota extends raza{
    constructor(pathH,nombreMP,edadP,numeroVacunasP,duenoP,residenciaDuenoP,idPadre) {
        super();
        this.crearF = new archivos(pathH);
        this.idMascota='';
        this.nombre=nombreMP;
        this.edad=edadP;
        this.numeroVacunas=numeroVacunasP;
        this.dueno=duenoP;
        this.residenciaDueno=residenciaDuenoP;
        this.idPadre=idPadre;
    }

    //Leer y eliminar si heredan
    leer() {
        super.leer();
    }

    eliminar() {
        super.eliminar();
    }

    crear(){
        this.crearF.asignarIndice().then((datos)=>{
            this.idMascota=datos;
            let raza =this.idMascota+' '+this.idPadre+' '+this.nombre+' '+this.edad+' '+this.numeroVacunas+' '+this.dueno+' '+this.residenciaDueno;
            this.crearF.escribirArchivo(raza);
        });
    }

    actualizar() {
        this.crearF.leerArchivo().then((datos)=>{
            console.log(datos);
            return this.crearF.leerConsolaMascota(this.idPadre);
        }).then((datos)=>{
            this.crearF.actualizar(datos[0],datos);
        });
    }

}

module.exports = Mascota;