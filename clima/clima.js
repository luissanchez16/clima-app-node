const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=c6a4a401758a2a999998092a1d487067&units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}