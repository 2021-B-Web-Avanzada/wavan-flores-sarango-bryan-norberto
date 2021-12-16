const {Router} = require('express');
const router = Router();
const _ = require('underscore');
let razas = require('../datos.json');
const {stringify} = require("nodemon/lib/utils");
const fs = require('fs');

//LEER
router.get('/',(req,res)=>{
    res.json(razas);
});

//INSERTAR
router.post('/',(req,res)=>{
    //const {idParent}=req.params;
    let children=[];
    const {nombre,origen,existencia,tamano,peso} = req.body;
    if(nombre&&origen&&existencia&&tamano&&peso){
        const id= razas.length+1;
        let newRaza ={
            id,
            nombre,
            origen,
            existencia,
            tamano,
            peso,
            children
        }
        razas.push(newRaza);
        const json_mascota= JSON.stringify(razas);
        fs.writeFileSync('src/datos.json',json_mascota,'utf-8');
        res.json(razas);
    }else{
        res.status(400).json({error:'Las entradas no pueden estar vacias'});
    }

});

//BORRAR
router.delete('/:idParent',(req,res)=>{
    const idParent=parseInt(req.params['idParent']);

    for(let i=0;i<razas.length;i++){
        if(razas[i].id==idParent){
            console.log("entra al if");
            razas=razas.filter(raza=>raza.id!=idParent);
            const json_mascota= JSON.stringify(razas);
            fs.writeFileSync('src/datos.json',json_mascota,'utf-8');
            res.send('borrado');
            break;
        }
    }

});

//ACTUALIZAR
router.put('/:idParent',(req,res)=>{
    const id=parseInt(req.params['idParent']);
    const {nombre,origen,existencia,tamano,peso} = req.body;
    let children =[];
    if(nombre&&origen&&existencia&&tamano&&peso) {
        let updateRaza ={
            id,
            nombre,
            origen,
            existencia,
            tamano,
            peso,
            children
        }
        for(let i=0;i<razas.length;i++){
            if(razas[i].id==id){
                updateRaza.children=razas[i].children;
                razas[i]=updateRaza;
                const json_raza= JSON.stringify(razas);
                fs.writeFileSync('src/datos.json',json_raza,'utf-8');
                res.send('Actualizado');
            }

        }
    }

});

module.exports =router;