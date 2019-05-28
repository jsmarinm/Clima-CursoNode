const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true

    }
}).argv;



const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng).then().catch(console.log);
        return `El clima de ${coords.direccion} es de ${temp}.`;
    } catch (ex) {
        return `No se pudo determinar el clima de ${direccion}`;
    }

}


getInfo(argv.direccion).then(console.log).catch(console.log);


// lugar.getLugarLatLng(argv.direccion).then(console.log);

// clima.getClima(19.147395, -96.120003).then(console.log).catch(console.log);