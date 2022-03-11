const { Router } = require("express");
const router = Router();
let proyectos;
let usuario1;

var mysql= require("mysql");
var conexion = mysql.createConnection(
    {
        host: 'localhost',
        database: 'constructora',
        user:'root',
        password: ''
    }
)

conexion.connect(
    function (error){
        if(error){
            throw error
        }
        else {
            console.log("Conexion exitosa")
        }
    }
);




//BuscarProyectos
router.post("/",(req, res) => {
    const {ciudad,dimensionmenor,dimensionmayor}=req.body;
    if(ciudad==null  || ciudad==""){
        conexion.query('select * from proyecto', function (error,results, fields){
            if(error){
                throw error;
            }
            else{
                proyectos=results;
                console.log(proyectos)
                console.log(ciudad)
                console.log(dimensionmayor)
                console.log(dimensionmenor)
                res.json(proyectos)
            }
        })
    }
    else{
        conexion.query('select * from proyecto WHERE proyecto.UBICACION_PROY LIKE '+mysql.escape('%'+ciudad+'%')+' and proyecto.DIMENSION_PROY >'+mysql.escape(dimensionmenor)+' and proyecto.DIMENSION_PROY<'+mysql.escape(dimensionmayor), function (error,results, fields){
            if(error){
                throw error;
            }
            else{
                proyectos=results;
                console.log(proyectos)
                console.log(ciudad)
                console.log(dimensionmayor)
                console.log(dimensionmenor)
                res.json(proyectos)
            }
        })
    }
})






module.exports = router;