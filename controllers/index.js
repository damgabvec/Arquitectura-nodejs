//const alumno = require('../models/alumno');
const alumnoService = require('./alumnosService');

const index = ( req , res, next ) => {
    res.render('index',{
        title : 'Listado de Alumnos',
        
    })
};

const alumnosX = async(req, res,next) =>{
	const alumn = await alumno.find({});
	res.status(200).json(alumn);
	
};


const alumnos = ( req , res ) => {
    
    res.render('alumnos',{
        title : 'Listado de Alumnos Simple',
        alumnos: alumnoService._alumnos
    })
};

const alumnosConDni = ( req , res, next ) => {
    res.render('alumnosConDni',{
		title : 'Listado de Alumnos Con DNI y Domicilio',
		alumnosConDni : alumnoService._alumnos
    })
};

const alumnosConFamiliares =( req , res, next ) => {
    res.render('alumnoConFamiliares',{
		title : 'Listado de Alumnos Con Familiares',
		alumnosConFamiliares: alumnoService._alumnos
    })
};

const alumnosFind =( req , res, next ) => {
    res.render('alumnoConFamiliares',{
		title : 'Listado de Alumnos Con Familiares',
		alumnosConFamiliares: alumnoService._alumnos
    })
};

const alumnosNew =( req , res, next ) => {
    res.render('nuevoAlumno',{
		title : 'Agregue un nuevo alumno',
		
    })
};

const buscar =  async (req, res) => {
    
    const docu = req.body.dni;

    try {
        let alu = await alumnoService.getById(docu);
        
        res.render('alumnosConID', {
            title: 'Busqueda de ' + docu,
            alumnosConID: alu

        })
    } catch (ex) {

        console.log(ex);
        res.status(404).end();
    }

};

const deleteAlumno = 'Delete';

const actualizar =  'Actualizar';

const agregarAlumno = 'Agregar';



module.exports = {
    index,
    alumnos,
    alumnosConDni,
	alumnosConFamiliares,
	alumnosX,
	deleteAlumno,
	actualizar,
	agregarAlumno,
    alumnosFind,
    alumnosNew,
    buscar
}