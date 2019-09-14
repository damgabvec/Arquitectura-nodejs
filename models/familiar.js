const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const familiarSchema = new Schema({
    nombre: String,
    apellido:  String,
    relacion: String
});


module.exports = mongoose.model('familiar',familiarSchema);