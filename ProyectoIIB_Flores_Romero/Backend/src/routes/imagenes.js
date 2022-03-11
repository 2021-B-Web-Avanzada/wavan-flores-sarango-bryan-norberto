const { Router } = require("express");
const router = Router();
let propiedades;
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




//Buscar imagenes
router.post("/",(req, res) => {
    const {idproyecto}=req.body;
    if(1==1){

        conexion.query(
            'select imagen.URL_IMG from imagen WHERE imagen.ID_PROPIEDAD='+mysql.escape(idproyecto)

            , function (error,results, fields){
                if(error){
                    throw error;
                }
                else{
                    res.json(results)
                }
            })


    }
    else {
    }

})


module.exports = router;