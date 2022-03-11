const { Router } = require("express");
const router = Router();
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




//insertarMensajes
router.post("/",(req, res) => {
    const {idproyecto, idpropiedad, idusuario, mensaje}=req.body;
    if(1==1){

        conexion.query(
            'insert INTO mensaje (ID_PROYECTO,ID_PROPIEDAD,ID_USUARIO,CONTENIDO_MENSAJE) VALUES ( '+mysql.escape(idproyecto)+','+mysql.escape(idpropiedad)+','+mysql.escape(idusuario)+','+mysql.escape(mensaje)+')'

            , function (error,results, fields){
                if(error){
                    throw error;
                }
                else{
                    res.json("exito")
                }
            })


    }
    else {
    }

})













//obtenerMensajes
router.put("/",(req, res) => {
    const {idUsuario}=req.body;
    if(1==1){

        conexion.query(
            'select m.CONTENIDO_MENSAJE, m.ID_PROYECTO,m.ID_PROPIEDAD,u.NOMBRE_USUARIO,u.EMAIL_USUARIO,u.CELULAR_USUARIO  from mensaje m JOIN proyecto p on m.ID_PROYECTO=p.ID_PROYECTO' +
            ' join usuario u on u.ID_USUARIO=m.ID_USUARIO where p.ID_USUARIO='+mysql.escape(idUsuario)

            , function (error,results, fields){
                if(error){
                    throw error;
                }
                else{
                    console.log(results)
                    console.log(idUsuario)
                    res.json(results)
                }
            })


    }
    else {
    }

})















module.exports = router;