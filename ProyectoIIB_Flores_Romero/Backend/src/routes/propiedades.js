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




//BuscarPropiedades
router.post("/",(req, res) => {
    const {ciudad,habmenor,habmayor,preciomenor,preciomayor}=req.body;
    if(1==1){

        conexion.query(
            'SELECT prop.ID_PROPIEDAD,prop.NOMBRE_PROP,prop.DIMENSION_TOTAL_PRO,prop.ID_PROYECTO,prop.PLANO_PROP,prop.PRECIO_PROP,prop.NUMERO_HABITACIONES_PROP,prop.NUMERO_BANOS_PROP,prop.NUMERO_ESTACIONAMIENTOS_PROP,prop.TIPO_PROP,proy.UBICACION_PROY' +
            ' from propiedad prop JOIN proyecto proy on prop.ID_PROYECTO = proy.ID_PROYECTO' +
            ' WHERE' +
            ' proy.UBICACION_PROY like'+mysql.escape('%'+ciudad+'%')+'AND prop.NUMERO_HABITACIONES_PROP>'+mysql.escape(habmenor) +
            ' and prop.NUMERO_HABITACIONES_PROP< '+mysql.escape(habmayor)+
            ' and prop.PRECIO_PROP< '+mysql.escape(preciomayor)+
            ' and prop.PRECIO_PROP> '+mysql.escape(preciomenor)



            , function (error,results, fields){
            if(error){
                throw error;
            }
            else{
                propiedades=results;
                console.log(propiedades)
                res.json(propiedades)
            }
        })


    }
    else {
    }

})














//BuscarPropiedades
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