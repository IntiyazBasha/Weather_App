window.addEventListener("load", (position) => {
  navigator.geolocation.getCurrentPosition((position) => {
    var lat = position["coords"]["latitude"];
    var long = position["coords"]["longitude"];
    var apikey = "b07ef65a295e4ecb47ec53f697ef0e0d";
    var country,
      locationName,
      weather,
      timeZone,
      weatherdesc,
      humidity;
    var geolocationurl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apikey}&lang=en-us`;
    axios.get(geolocationurl).then((position) => {
      country = position.data.sys.country;
      locationName = position.data.name;
      temperature = position.data.main.temp;
      weather = position.data.weather[0].main;
      weatherDesc = position.data.weather[0].description;
      weathericon = position.data.weather[0].icon;
      humidity = position.data.main.humidity;
      timeZone = position.data.timezone;
      retId("country").textContent = `Country: ${country}`;
      retId("place").textContent = locationName;
      retId("icon").setAttribute(
        "src",
        `https://openweathermap.org/img/wn/${weathericon}@2x.png`
      );
      retId('weather').textContent = weather;
      retId('weatherDesc').textContent = weatherDesc;
      retId("time").textContent = `Time: ${new Date().getHours() + ":" + new Date().getMinutes()} `
        ;
      var day = new Date().getDay();
      switch (day) {
        case 0:
          retId("day").textContent = "Day: Sunday";
          break;
        case 1:
          retId("day").textContent = "Day: Monday";
          break;
        case 2:
          retId("day").textContent = "Day: Tuesday";
          break;
        case 3:
          retId("day").textContent = "Day: Wednesday";
          break;
        case 4:
          retId("day").textContent = "Day: Thursday";
          break;
        case 5:
          retId("day").textContent = "Day: Friday";
          break;
        case 6:
          retId("day").textContent = "Day: Saturday";
          break;
      }
      retId("date").textContent = `Date: ${new Date().getDate() +
        "-" +
        new Date().getMonth() +
        "-" +
        new Date().getFullYear()}`;
      retId("temp").textContent = `${Math.trunc(
        temperature - 273
      )}${"\u00B0"}C`;
      retId('humidity').textContent = `Humidty: ${humidity}`;
    });
  });
});

function retId(id) {
  return document.getElementById(id);
}
