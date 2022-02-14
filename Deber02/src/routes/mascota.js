const {Router} = require('express');
const router = Router();
const _ = require('underscore');
let mascotas = require('../datos.json');
const {stringify} = require("nodemon/lib/utils");
const fs = require('fs');

//LEER
router.get('/',(req,res)=>{
    let mascotas2= [];
    for(let i=0;i<mascotas.length;i++) {
            for (let j = 0; j < mascotas[i]["children"].length; j++) {
                var json = mascotas[i].children[j];
                json.idPadre = mascotas[i].id;
                mascotas2.push(json);
            }
    }

    res.json(mascotas2);
});

//LEER por cada uno
router.get('/:idParent&:idChildren',(req,res)=>{
    const idParent=parseInt(req.params['idParent']);
    const idChildren=parseInt(req.params['idChildren']);

    for(let i=0;i<mascotas.length;i++) {
        if (mascotas[i].id == idParent) {
            for (let j = 0; j < mascotas[i]["children"].length; j++) {
                if (mascotas[i].children[j].idChildren == idChildren) {
                    res.json(mascotas[i].children[j]);
                    break;
                }
            }
        }
    }
});


//INSERTAR
router.post('/:idParent',(req,res)=>{
    const {idParent}=req.params;
    const {nombreChildren,edad,numeroVacunas,dueno,residenciaDueno} = req.body;
    if(nombreChildren&&edad&&numeroVacunas&&dueno&&residenciaDueno){
        const idChildren= mascotas.length+1;
        let newMascota ={
            idChildren,
            nombreChildren,
            edad,
            numeroVacunas,
            dueno,
            residenciaDueno
        }
        for(let i=0;i<mascotas.length;i++){
            if(mascotas[i].id==idParent){
                mascotas[i].children.push(newMascota);
                const json_mascota= JSON.stringify(mascotas);
                fs.writeFileSync('src/datos.json',json_mascota,'utf-8');
                break;
            }
        }
        res.send("Insertado");
    }else{
        res.status(400).json({error:'Las entradas no pueden estar vacias'});
    }

});

//BORRAR
router.delete('/:idParent&:idChildren',(req,res)=>{
    const idParent=parseInt(req.params['idParent']);
    const idChildren=parseInt(req.params['idChildren']);


    for(let i=0;i<mascotas.length;i++){

        if(mascotas[i].id==idParent){
            for(let j=0;j<mascotas[i]["children"].length;j++){
                if(mascotas[i].children[j].idChildren==idChildren){
                    mascotas[i].children=mascotas[i].children.filter(mascota=>mascota.idChildren!=idChildren);
                    const json_mascota= JSON.stringify(mascotas);
                    fs.writeFileSync('src/datos.json',json_mascota,'utf-8');
                    res.send("Eliminada");
                }
            }
        }


    }

});

//ACTUALIZAR
router.put('/:idParent&:idChildren',(req,res)=>{
    const idParent=parseInt(req.params['idParent']);
    const idChildren=parseInt(req.params['idChildren']);
    const {nombreChildren,edad,numeroVacunas,dueno,residenciaDueno} = req.body;
    if(nombreChildren&&edad&&numeroVacunas&&dueno&&residenciaDueno) {
        let updateMascota = {
            idChildren,
            nombreChildren,
            edad,
            numeroVacunas,
            dueno,
            residenciaDueno
        }
        for(let i=0;i<mascotas.length;i++){
            if(mascotas[i].id==idParent){
                for(let j=0;j<mascotas[i]["children"].length;j++){
                    if(mascotas[i].children[j].idChildren==idChildren){
                        mascotas[i].children[j]=updateMascota;
                        const json_mascota= JSON.stringify(mascotas);
                        fs.writeFileSync('src/datos.json',json_mascota,'utf-8');
                        res.send('Actualizado');
                    }
                }
            }
        }
    }

});

module.exports =router;