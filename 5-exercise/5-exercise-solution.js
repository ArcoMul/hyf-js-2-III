// Get the elements already defined in the HTML
const overviewEl = document.getElementById("weather-overview");
const detailEl = document.getElementById("weather-detail");

// Get the weather data using the given function
getWeatherData(null, function(err, data) {
  // Clear the element to remove the 'Loading...' message
  overviewEl.innerHTML = "";

  // Loop over the weather information array
  data.forEach(d => {
    // Create a <span> for the date
    const span = document.createElement("span");
    span.innerText = d.date;

    // Create a <p> for the temperature
    const p = document.createElement("p");
    p.innerText = `${d.temperature}˚`;

    // Create a <div> to hold the <span> and the <p>
    const div = document.createElement("div");
    div.classList.add("weather-item");

    // Append the <span> and the <p> to the <div>
    div.appendChild(span);
    div.appendChild(p);

    // Append the <div> to the overview element already
    // on the page
    overviewEl.appendChild(div);

    // Listen to click events on the <div> and show
    // weather information in detail when a click occurs
    div.addEventListener("click", function() {
      detailEl.innerText = `Temperature: ${d.temperature} degrees
                            Wind speed: ${d.windSpeed} km/h
                            Wind direction: ${d.windDirection}`;
    });
  });
});
