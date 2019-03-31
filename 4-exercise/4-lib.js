function getWeatherData(date, callback) {
  setTimeout(function() {
    if (date && date != "31-03-2019") {
      callback("No data for this date or date is in wrong format");
      return;
    }
    if (date == "31-03-2019") {
      return callback(null, {
        date: "31-03-3019",
        temperature: 12,
        windSpeed: 26,
        windDirection: "south-west"
      });
    }
    return callback(null, [
      {
        date: "31-03-3019",
        temperature: 12,
        windSpeed: 26,
        windDirection: "south-west"
      },
      {
        date: "01-04-3019",
        temperature: 13,
        windSpeed: 24,
        windDirection: "south"
      },
      {
        date: "02-04-3019",
        temperature: 9,
        windSpeed: 15,
        windDirection: "south-west"
      },
      {
        date: "02-04-3019",
        temperature: 16,
        windSpeed: 22,
        windDirection: "east"
      }
    ]);
  }, 1000);
}
