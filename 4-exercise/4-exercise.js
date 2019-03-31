//
// getWeatherData Documentation:
//
// Function API:
// getWeatherData('DD-MM-YYYY', callback);
//
// Callback returns:
// - error (string)
// - data (object), of the following format:
// {
//   windSpeed: Number,
//   windDirection: String,
//   temperature: Number,
// }
//

function getTemperatureOfToday(callback) {
  // Assignment:
  //
  // Fill in the body of this function
  //
  // Get weather data using the function 'getWeatherData'
  // described above
  //
  // Use a callback!
}

// Don't change the below code:
getTemperatureOfToday(function(err, temperature) {
  console.log(`It's ${temperature} degrees today`);
});
