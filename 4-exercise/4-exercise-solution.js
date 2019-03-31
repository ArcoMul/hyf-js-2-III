// getWeatherData documentation:
//
// getWeatherData('DD-MM-YYYY', callback);
//
// Where the callback returns error & data,
// with data in the following format:
//
// {
//   windSpeed: Number,
//   windDirection: String,
//   temperature: Number,
// }

function getTemperatureOfToday(callback) {
  getWeatherData("31-03-2019", function(err, data) {
    callback(err, data.temperature);
  });
}

getTemperatureOfToday(function(err, temperature) {
  console.log(`It's ${temperature} degrees today`);
});
