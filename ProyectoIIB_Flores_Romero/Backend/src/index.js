const  express = require("express");
const  app = express();
const morgan = require("morgan");
//configuraciones
app.set("port",process.env.PORT || 3000);
app.set("json spaces", 2);


//middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes
app.use(require("./routes/index"));
app.use("/api/usuarios",require("./routes/usuarios"))
app.use("/api/proyectos",require("./routes/proyectos"))
app.use("/api/propiedades",require("./routes/propiedades"))
app.use("/api/mensajes",require("./routes/mensajes"))
app.use("/api/imagenes",require("./routes/imagenes"))
//iniciando el servidor
app.listen(3000, () => {
    console.log(`Server on port  ${app.get("port")}`);
});



