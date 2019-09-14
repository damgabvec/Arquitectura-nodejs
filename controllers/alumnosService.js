
function ClientsService() {

    console.log('Init user service');

    this._alumnos = [
        {
            id : 16295,
            nombre : "KLEINER RODOLFO",
            apellido : "ROMERO ALANYA",
            documento : "52454024",
            domicilio : "LAVALLE 2262",
            nombreFamiliar : "Kleiner Abel",
            apellidoFamiliar : "Romero Blas",
            parentesco : "Padre"
        },
        {
            id : 16295,
            nombre : "KLEINER RODOLFO",
            apellido : "ROMERO ALANYA",
            documento : "52454024",
            domicilio : "LAVALLE 2262",
            nombreFamiliar : "ZETTY ANAIR",
            apellidoFamiliar : "ALANYA VASQUEZ",
            parentesco : "Madre"
        },
        {
            id : 16999,
            nombre : "angelica",
            apellido : "merino",
            documento : "94074014",
            domicilio : "chilavet",
            nombreFamiliar : "nicolasa",
            apellidoFamiliar : "laime",
            parentesco : "Madre"
        },
        {
            id : 17730,
            nombre : "Zoe Geraldine ",
            apellido : "AYBAR Garcia",
            documento : "53473258",
            domicilio : "MANZANA 101 CASA 32",
            nombreFamiliar : "NORMA ELIZABETH",
            apellidoFamiliar : "GARCIA VERA",
            parentesco : "Madre"
        },
        {
            id : 17730,
            nombre : "Zoe Geraldine ",
            apellido : "AYBAR Garcia",
            documento : "53473258",
            domicilio : "MANZANA 101 CASA 32",
            nombreFamiliar : "GERARDO RAMON ALBERTO",
            apellidoFamiliar : "AYBAR",
            parentesco : "Padre"
        },
        {
            id : 17730,
            nombre : "Zoe Geraldine ",
            apellido : "AYBAR Garcia",
            documento : "53473258",
            domicilio : "MANZANA 101 CASA 32",
            nombreFamiliar : "ZOE GERALDINE",
            apellidoFamiliar : "AYBAR GARCIA",
            parentesco : "No Aplica"
        },
        {
            id : 20182,
            nombre : "Alejandro Fabian",
            apellido : "Areco Alviso",
            documento : "94950267",
            domicilio : "mz 6 casa 12",
            nombreFamiliar : "maxima",
            apellidoFamiliar : "areco alviso",
            parentesco : "Madre"
        },
        {
            id : 20182,
            nombre : "Alejandro Fabian",
            apellido : "Areco Alviso",
            documento : "94950267",
            domicilio : "mz 6 casa 12",
            nombreFamiliar : "Jesica Daiana",
            apellidoFamiliar : "ARECO",
            parentesco : "No Aplica"
        },
        {
            id : 29981,
            nombre : "Andrés Emanuel",
            apellido : "Ramos",
            documento : "48280930",
            domicilio : "Villa 31 bis manzana104 casa 104 retiro",
            nombreFamiliar : "Natalia Mabel",
            apellidoFamiliar : "Rojas",
            parentesco : "Madre"
        },
        {
            id : 29981,
            nombre : "Andrés Emanuel",
            apellido : "Ramos",
            documento : "48280930",
            domicilio : "Villa 31 bis manzana104 casa 104 retiro",
            nombreFamiliar : "Julieta Daiana Anahí",
            apellidoFamiliar : "Camacho Rojas",
            parentesco : "No Aplica"
        },
        {
            id : 33978,
            nombre : "Jazmin",
            apellido : "Raubian",
            documento : "49087405",
            domicilio : "PAYSANDU 1832",
            nombreFamiliar : "Lucia",
            apellidoFamiliar : "Raubian",
            parentesco : "Madre"
        },
        {
            id : 45842,
            nombre : "Sofia paz",
            apellido : "Garcia",
            documento : "49362408",
            domicilio : "BELAUSTEGUI, LUIS, DR. 3125",
            nombreFamiliar : "María victoria",
            apellidoFamiliar : "Garcia",
            parentesco : "Madre"
        },
        {
            id : 47589,
            nombre : "Bautista ricardo",
            apellido : "Oroño",
            documento : "53334715",
            domicilio : "ALGARROBO 860",
            nombreFamiliar : "Lucrecia",
            apellidoFamiliar : "Baez",
            parentesco : "Madre"
        },
        {
            id : 47589,
            nombre : "Bautista ricardo",
            apellido : "Oroño",
            documento : "53334715",
            domicilio : "ALGARROBO 860",
            nombreFamiliar : "Ricardo damian",
            apellidoFamiliar : "Oroño",
            parentesco : "Padre"
        },
        {
            id : 47589,
            nombre : "Bautista ricardo",
            apellido : "Oroño",
            documento : "53334715",
            domicilio : "ALGARROBO 860",
            nombreFamiliar : "Ulises damian",
            apellidoFamiliar : "Oroño",
            parentesco : "No Aplica"
        },
        {
            id : 47589,
            nombre : "Bautista ricardo",
            apellido : "Oroño",
            documento : "53334715",
            domicilio : "ALGARROBO 860",
            nombreFamiliar : "Zahira jazmin",
            apellidoFamiliar : "Oroño",
            parentesco : "No Aplica"
        },
        {
            id : 47617,
            nombre : "Zahira jazmin",
            apellido : "Oroño",
            documento : "52458119",
            domicilio : "ALGARROBO 860",
            nombreFamiliar : "Lucrecia",
            apellidoFamiliar : "Baez",
            parentesco : "Madre"
        },
        {
            id : 47617,
            nombre : "Zahira jazmin",
            apellido : "Oroño",
            documento : "52458119",
            domicilio : "ALGARROBO 860",
            nombreFamiliar : "Ricardo damian",
            apellidoFamiliar : "Oroño",
            parentesco : "Padre"
        },
        {
            id : 47617,
            nombre : "Zahira jazmin",
            apellido : "Oroño",
            documento : "52458119",
            domicilio : "ALGARROBO 860",
            nombreFamiliar : "Ulises damian",
            apellidoFamiliar : "Oroño",
            parentesco : "No Aplica"
        },
        {
            id : 47617,
            nombre : "Zahira jazmin",
            apellido : "Oroño",
            documento : "52458119",
            domicilio : "ALGARROBO 860",
            nombreFamiliar : "Bautista ricardo",
            apellidoFamiliar : "Oroño",
            parentesco : "No Aplica"
        },
        {
            id : 47626,
            nombre : "Ulises damian",
            apellido : "Oroño",
            documento : "48317710",
            domicilio : "ALGARROBO 860",
            nombreFamiliar : "Lucrecia",
            apellidoFamiliar : "Baez",
            parentesco : "Madre"
        },
        {
            id : 47626,
            nombre : "Ulises damian",
            apellido : "Oroño",
            documento : "48317710",
            domicilio : "ALGARROBO 860",
            nombreFamiliar : "Ricardo damian",
            apellidoFamiliar : "Oroño",
            parentesco : "Padre"
        },
        {
            id : 47626,
            nombre : "Ulises damian",
            apellido : "Oroño",
            documento : "48317710",
            domicilio : "ALGARROBO 860",
            nombreFamiliar : "Bautista ricardo",
            apellidoFamiliar : "Oroño",
            parentesco : "No Aplica"
        },
        {
            id : 47626,
            nombre : "Ulises damian",
            apellido : "Oroño",
            documento : "48317710",
            domicilio : "ALGARROBO 860",
            nombreFamiliar : "Zahira jazmin",
            apellidoFamiliar : "Oroño",
            parentesco : "No Aplica"
        },
        {
            id : 49448,
            nombre : "AMAYA AYLEN",
            apellido : "POLO TORRES",
            documento : "47960648",
            domicilio : "SAN JUAN AV. 3030",
            nombreFamiliar : "NIEVESA",
            apellidoFamiliar : "TORRES COLQUE",
            parentesco : "Madre"
        },
        {
            id : 49448,
            nombre : "AMAYA AYLEN",
            apellido : "POLO TORRES",
            documento : "47960648",
            domicilio : "SAN JUAN AV. 3030",
            nombreFamiliar : "AARON AXEL",
            apellidoFamiliar : "POLO TORRES",
            parentesco : "No Aplica"
        },
        {
            id : 53614,
            nombre : "santiago daniel",
            apellido : "velasquez soto",
            documento : "49123005",
            domicilio : "MEDINA 1822",
            nombreFamiliar : "emilio",
            apellidoFamiliar : "velasquez choque",
            parentesco : "Padre"
        },
        {
            id : 53614,
            nombre : "santiago daniel",
            apellido : "velasquez soto",
            documento : "49123005",
            domicilio : "MEDINA 1822",
            nombreFamiliar : "susana",
            apellidoFamiliar : "soto huayllas",
            parentesco : "Madre"
        },
        {
            id : 56527,
            nombre : "Briana",
            apellido : "Cañete",
            documento : "53473329",
            domicilio : "Manzana 3 casa 53",
            nombreFamiliar : "Mirian dolores",
            apellidoFamiliar : "Cañete Benítez",
            parentesco : "Madre"
        },
        {
            id : 56527,
            nombre : "Briana",
            apellido : "Cañete",
            documento : "53473329",
            domicilio : "Manzana 3 casa 53",
            nombreFamiliar : "Fernando exequiel",
            apellidoFamiliar : "Benegas",
            parentesco : "No Aplica"
        }
    ];

};


/**
 * @return {Promise<any>}
 */
ClientsService.prototype.getAll = function () {

    return new Promise((resolve) => {

        resolve(this._alumnos);
    });

};


/**
 * @param documento
 * @return {Promise<any>}
 */
ClientsService.prototype.getById = function (documento) {

    return new Promise((resolve, reject) => {

        let alumno = this._alumnos.find(c => c.documento == documento);

        if (alumno) {

            resolve(alumno);
            

        } else {

            reject(documento);
        }

    });

};


/**
 * @param client
 */
ClientsService.prototype.add = function (client) {

    this._alumnos.push(client);
};


/**
 * @param id
 */
ClientsService.prototype.deleteById = function (id) {

    this._alumnos = this._alumnos.filter(c => c.id != req.params.id);
};


module.exports = new ClientsService();


