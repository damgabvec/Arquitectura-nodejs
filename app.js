
const express = require('express' );
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
//const mongoose = require('mongoose');

// Importo el modulo de rutas para poderlo utilizar 
// en la configuracion inicial del proyecto.

const routes = require('./routes/index');

// Configuraciones
    
    // configuro el puerto donde va a escuchar el servidor 
    // si no tiene un puerto definido que utilice el puerto 3000
    app.set('port',process.env.PORT || 3000);

    // Configuro las vistas
    app.set('views', path.join(__dirname,'views'));
    
    // Configuro el motor de platillas que voy a usar para las vistas
    app.set('view engine', 'ejs');
    
   // mongoose.Promise = global.Promise;
  //  mongoose.connect('mongodb://localhost/res-api-db',{
        //useMongoClient: true
    //})
      //  .then(db => console.log('Se conecto a la db'))
        //.catch(err => console.log(err));


// MiddleWears

    app.use((req,res,next) =>{
       //  console.log(req.url,'--',req.method);
        next();
    });

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:false}));
    app.use(morgan('dev'));

// Routes

app.use(routes);

// Static Files. Estos son todos los archivos relacionados al navegador (css, javascript, etc) Frontend
    app.use(express.static(path.join(__dirname,'public')))


// Inicia el Servidor
app.listen(app.get('port'), ()=> {
    console.log('Server on port : ', app.get('port'))

});