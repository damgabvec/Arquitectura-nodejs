const express = require('express' );
const router = express.Router();
//const router = require('express-promise-router')();

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

router.get('/alumnos/familiares', indexController.alumnosConFamiliares);
router.get('/alumno/dni', indexController.alumnosFind);

router.get('/alumnos/:documento', async (req, res) => {
    //console.log();
    try {
        let alu = await alumnosService.getById(req.params.documento);
        //res.json(cli);
        res.render('alumnosConID', {
            title: 'Busqueda por ID Alumno',
            alumnosConID: alu

        })
    } catch (ex) {

       // console.log('Xxxxxx');
        res.status(404).end();
    }

});

router.get('/alumnos/form', async (req, res) => {
    
console.log(req.body['search']);


    /*try {
        let alu = await alumnosService.getById(req.body['search']);
        //res.json(cli);
        res.render('alumnosConID', {
            title: 'Busqueda por ID Alumno',
            alumnosConID: alu

        })
    } catch (ex) {

        console.log(ex);
        res.status(404).end();
    }*/

});
//router.delete('/alumno/:id', indexController.deleteAlumno);

//router.update('/alumno/:id',indexController.actualizar);

//router.put('/alumno/agregarAlumno',indexController.agregarAlumno);

module.exports = router;