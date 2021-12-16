//Bryan Flores
const express = require('express');
//ejecuto el framework
const app = express();
//Middle ware es una funcion que procesa datos antes de nuestro servidor
const morgan = require('morgan');

//settings
app.set('port',process.env.PORT || 3000);
app.set('json spaces', 2);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes
app.use(require('./routes/index'));
app.use('/api/mascota',require('./routes/mascota'));
app.use('/api/raza',require('./routes/raza'));

//Cuando inicies quiero mensaje por consola server
//starting the server
app.listen(app.get('port'), ()=>{
    console.log('Server on port ${3000}');
});