const axios = require('axios');

const forecast = (latitude, longitude, callback) => {
    const url = "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=409fb67cc09cf7ecbc58a0bd77c849eb&units=metric";
    axios.get(url)
    .then(function (response) {
        // handle success
            callback(undefined, {
                temperature: response.data.main.temp,
                humidity: response.data.main.humidity
            })
    })
    .catch(function (error) {
        // handle error
        callback(error, undefined);
    })
    .then(function () {
        // always executed
    });
}

module.exports = forecast;