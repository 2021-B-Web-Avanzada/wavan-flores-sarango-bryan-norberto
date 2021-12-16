const fs = require('fs');
const fsPromises = fs.promises
const readline = require('readline-sync');
const archivos = require('./Archivos.js')

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

class Mascota extends Raza{
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

module.exports = Raza;
module.exports = Mascota;

let opcion = readline.question(" ¿Desea crear(c),leer(r), actualizar(u) o eliminar(d) un registro? ");
switch (opcion){
    case 'c':{
        let opcion2 = readline.question(" ¿Desea crear una entidad Raza(r) o Mascota(m) ");
        switch (opcion2){
            case 'r':
            {
                let path = 'Raza.txt';
                let nombre = readline.question(" Ingresa el nombre ");
                let origen = readline.question(" Ingresa el lugar origen ");
                let existencia = readline.question(" Ingresa si existe(true) y si no existe (false) ");
                let altura = readline.question(" Ingresa la altura en cm ");
                let peso = readline.question(" Ingresa el peso en kg ");

                if(path&&nombre&&origen&&existencia&&altura&&peso){
                    let registroRaza = new Raza(path,nombre,origen,existencia,altura,peso);
                    registroRaza.crear();
                }
                else{
                    console.log('No se puede crear sin los atributos');
                }

                break;
            }
            case 'm':
            {
                let path = 'Mascota.txt';
                let nombre = readline.question(" Ingresa el nombre ");
                let edad = readline.question(" Ingresa la edad ");
                let numeroVacunas = readline.question(" Ingresa el número de vacunas que posee ");
                let dueno = readline.question(" Ingresa el nombre del dueño ");
                let residenciaDueno = readline.question(" Ingresa donde reside el dueño ");
                let idPadre = readline.question(" Ingresa el identificar de la clase padre ");
                if(path&&nombre&&edad&&numeroVacunas&&dueno&&residenciaDueno&&idPadre){
                    let registroMascota = new Mascota(path,nombre,edad,numeroVacunas,dueno,residenciaDueno,idPadre);
                    registroMascota.crear();
                }
                else{
                    console.log('No se puede crear sin los atributos');
                }
                break;
            }
            default:
                console.log('Algo ha fallado, intentalo de nuevo');
        }
        break;
    }
    case 'r':{
        let opcion2 = readline.question(" ¿Desea leer una entidad Raza(r) o Mascota(m) ");
        switch (opcion2){
            case 'r':
            {
                let x = new Raza('Raza.txt','-','-',true,0,0);
                x.leer();
                break;
            }
            case 'm':
            {
                let x = new Mascota('Mascota.txt','Luchito',5,3,'Bryan','Chillogallo',1);
                x.leer();
                break;
            }
            default:
                console.log('Algo ha fallado, intentalo de nuevo');
        }
        break;
    }
    case 'u':{
        let opcion2 = readline.question(" ¿Desea actualizar una entidad Raza(r) o Mascota(m) ");
        switch (opcion2){
            case 'r':
            {
                let x = new Raza('Raza.txt','-','-',true,0,0);
                x.actualizar();
                break;
            }
            case 'm':
            {
                let x = new Mascota('Mascota.txt','Luchito',5,3,'Bryan','Chillogallo',1);
                x.actualizar();
                break;
            }
            default:
                console.log('Algo ha fallado, intentalo de nuevo');
        }
        break;
    }
    case 'd':{
        let opcion2 = readline.question(" ¿Desea crear una entidad Raza(r) o Mascota(m) ");
        switch (opcion2){
            case 'r':
            {
                let x = new Raza('Raza.txt','-','-',true,0,0);
                x.eliminar();
                break;
            }
            case 'm':
            {
                let x = new Mascota('Mascota.txt','-',0,0,'-','-',0);
                x.eliminar();
                break;
            }
            default:
                console.log('Algo ha fallado, intentalo de nuevo');
        }
        break;
    }
    default:
        console.log('Algo ha fallado, intentalo de nuevo');
}
// prompt.start();
// prompt.get(['opcion'], function (err, result) {
//     if (err) { return onErr(err); }
//
//
// });
//
//
// function onErr(err) {
//     console.log(err);
//     return 1;
// }

//let x = new Raza('Raza.txt','SiberianHusky','Siberia',true,56,25);
//crear
// x.crear();
// leer
// x.leer();
//update
//x.actualizar();
//borrar
//x.eliminar();

//ENTIDAD HIJA

//let x = new Mascota('Raza.txt','Mascota.txt','SiberianHusky','Siberia',true,56,25,'Luchito',5,3,'Bryan','Chillogallo',1);
//CREAR
//x.crear();
//LEER
//x.leer();
//ACTUALIZAR
///x.actualizar();
//Borrar
//x.eliminar();