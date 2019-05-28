const axios = require('axios');


const getClima = async(lat, lon) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=4e505bee7537f2bdfef486ac84dd0701&units=metric`);
    return resp.data.main.temp;
}


module.exports = {
    getClima
}