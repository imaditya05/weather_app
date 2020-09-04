const request = require('request')
const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=15ed75e331e917662c02cdee121b337e&query=' + latitude + ',' + longitude

    request({url : url, json: true}, (error, { body }) => {
        if (error){
            callback('Unable to connect to weather service', undefined)
        } else if(body.error){
            callback('unable to find location')
        } else {
            callback(undefined,  'the current weather condition is ' + body.current.weather_descriptions + ' and temperature is ' + body.current.temperature + ' degree celcius')
        }
    })
}

module.exports = forecast