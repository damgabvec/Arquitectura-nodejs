const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var fixtures = require('node-mongoose-fixtures');


const alumnoSchema = new Schema({
    nombre: String,
    apellido:  String,
    documento: String,
    domicilio: String,
    apellidoFamiliar: String,
    parentesco: String
    
});


module.exports = mongoose.model('alumno',alumnoSchema);

fixtures({
    alumno: [
        {
            
            nombre : "KLEINER RODOLFO",
            apellido : "ROMERO ALANYA",
            documento : "52454024",
            domicilio : "LAVALLE 2262",
            nombreFamiliar : "Kleiner Abel",
            apellidoFamiliar : "Romero Blas",
            parentesco : "Padre"
        },
        {
            
            nombre : "KLEINER RODOLFO",
            apellido : "ROMERO ALANYA",
            documento : "52454024",
            domicilio : "LAVALLE 2262",
            nombreFamiliar : "ZETTY ANAIR",
            apellidoFamiliar : "ALANYA VASQUEZ",
            parentesco : "Madre"
        },
        {
            
            nombre : "angelica",
            apellido : "merino",
            documento : "94074014",
            domicilio : "chilavet",
            nombreFamiliar : "nicolasa",
            apellidoFamiliar : "laime",
            parentesco : "Madre"
        },
    
    ],
    
}, function(err, data) {
    // data is an array of all the documents created
});

// Name a dataset for future use
//fixtures.save('alumno');
fixtures.clear();

