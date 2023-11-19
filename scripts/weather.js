document.addEventListener('DOMContentLoaded', function () {
    const apiKey = '807a06fe21a581ca08e4f84347eba1d9';
    const city = 'Vereeniging';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        updateWeatherCard(data);
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  
    function updateWeatherCard(data) {
      const temperatureKelvin = data.main.temp;
      const temperatureCelsius = Math.round(temperatureKelvin - 273.15); // Convert Kelvin to Celsius and round to the nearest whole number
      const description = data.weather[0].description;
      const iconCode = data.weather[0].icon;
  
      document.getElementById('temperature').textContent = temperatureCelsius + ' °C';
      document.getElementById('description').textContent = description;
      document.getElementById('weather-icon').src = `https://openweathermap.org/img/w/${iconCode}.png`;
    }

   // Function to capitalize the first letter of a string
   function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
 

});