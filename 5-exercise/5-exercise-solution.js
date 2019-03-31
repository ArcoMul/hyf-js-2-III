const overviewEl = document.getElementById("weather-overview");
const detailEl = document.getElementById("weather-detail");

getWeatherData(null, function(err, data) {
  overviewEl.innerHTML = "";
  data.forEach(d => {
    const span = document.createElement("span");
    span.innerText = d.date;
    const p = document.createElement("p");
    p.innerText = `${d.temperature}˚`;
    const div = document.createElement("div");
    div.classList.add("weather-item");
    div.appendChild(span);
    div.appendChild(p);
    overviewEl.appendChild(div);
    div.addEventListener("click", function() {
      detailEl.innerText = `Temperature: ${d.temperature} degrees
      Wind speed: ${d.windSpeed} km/h
      Wind direction: ${d.windDirection}`;
    });
  });
});
