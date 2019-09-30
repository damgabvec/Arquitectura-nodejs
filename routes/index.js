const express = require('express' );
const router = express.Router();
//const router = require('express-promise-router')();
const bodyP = require('body-parser');
//La logica de como van a resolver las urls va en controllers
const indexController = require('../controllers/index');
const alumnosService = require('../controllers/alumnosService');


// Defino las rutas
// La logica de como van a funcionar las rutas va ir dentro de la 
// carpeta controllers

// Endpoints

router.get('/',indexController.index );
router.get('/alumnos/list', indexController.alumnos);
router.get('/alumnos/full', indexController.alumnosConDni);

//router.get('/alumnos/familiares', indexController.alumnosConFamiliares);
//router.get('/alumno/dni', indexController.alumnosFind);

router.get('/alumnos/:documento', async (req, res) => {
    console.log(req.body.documento);
    try {
        let alu = await alumnosService.getById(req.params.documento);
        //res.json(cli);
        res.render('alumnosConID', {
            title: 'Busqueda por ID Alumno',
            alumnosConID: alu

        })
    } catch (ex) {
        res.status(404).end();
    }

});


router.post('/buscar', indexController.buscar);
router.post('/nuevo', indexController.nuevo);

router.get('/alumno/new', indexController.alumnosNew);


//router.delete('/alumno/:id', indexController.deleteAlumno);

//router.update('/alumno/:id',indexController.actualizar);

//router.put('/alumno/agregarAlumno',indexController.agregarAlumno);

module.exports = router;