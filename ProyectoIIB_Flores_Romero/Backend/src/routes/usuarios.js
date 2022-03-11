const { Router } = require("express");
const router = Router();
let usuarios;
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


conexion.query('select * from usuario', function (error,results, fields){
    if(error){
        throw error;
    }
    else{
        usuarios=results;
        //console.log(usuarios)
    }
})



//Ruta para verificar usuario
router.post("/",(req, res) => {
    const {usuario,contrasena}=req.body;
    console.log(usuario)
    console.log(contrasena)
    let salida=false
            usuarios.forEach(
                result=>{
                 if(result.NOMBRE_USUARIO==usuario){
                     if(result.CONTRASENA_USUARIO==contrasena){
                         salida=true
                         usuario1=result
                         console.log("siuuuuuuuuuuuuu")
                         console.log(usuario)
                         console.log(contrasena)
                         res.json(usuario1)
                     }
                 }

                }
            );
    res.json()


})





module.exports = router;