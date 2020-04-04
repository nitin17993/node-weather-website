const axios = require('axios');

const geocode = (address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1Ijoibml0aW4xNzk5MyIsImEiOiJjazhpaXc1eGUwNWh3M2RxaHo1cnIxemk2In0.1Qw-hZu87-NOpFKeL6JPCQ&limit=1";

    axios.get(url)
    .then(function (response) {
        // handle success
        if(response.data.features.length === 0) {
            callback('Unable to find location', undefined);
        }
        else {
            callback(undefined, {
                latitude: response.data.features[0].center[1],
                longitude: response.data.features[0].center[0],
                location: response.data.features[0].place_name
            })
        }
    })
    .catch(function (error) {
        // handle error
        callback(error, undefined);
    })
    .then(function () {
        // always executed
    });
}

module.exports = geocode;