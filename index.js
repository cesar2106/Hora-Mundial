//hora mundial

const express = require("express");
const app = express();
const moment = require('moment-timezone');


app.get('/hora/', (req, res) => {
    const ciudades = ['America/Cartagena', 'America/Argentina/Cordoba', 'America/Santiago', 'America/Caracas', 'Africa/Luanda', 'Europe/Kirov', 'America/Montevideo', 'America/La_Paz' ];
    const hora = ciudades.map(ciudad => {
        return {
            ciudad: ciudad,
            hora: moment().tz(ciudad).format('dddd MMMM Do YYYY, h:mm:ss a')
        }
    });
    res.send(hora)
});


app.get('/hora/:ciudad', (req, res) => {
    const ciudad = req.params.ciudad;
    const hora = moment().tz(ciudad).format('HH:mm:ss')   
    res.send(hora)
});


app.listen(9000, () => {
    console.log('Servidor corriendo en http://localhost:9000');
}
);