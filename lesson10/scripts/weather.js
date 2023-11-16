// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// OpenWeatherMap API URL
const apiKey = '807a06fe21a581ca08e4f84347eba1d9';
const lat = '49.7523';
const lon = '6.6324';
const units = 'imperial';
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayResults(data);
    } else {
      throw new Error(await response.text());
    }
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}

function displayResults(data) {
  // Format the temperature to display zero decimal points
  const formattedTemp = data.main.temp.toFixed(0);
  currentTemp.innerHTML = `${formattedTemp}&deg;F`;

  // Construct the weather icon URL
  const iconCode = data.weather[0].icon;
  const iconURL = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  weatherIcon.setAttribute('src', iconURL);
  weatherIcon.setAttribute('alt', data.weather[0].description);

  // Capitalize each word of the weather description
  const capitalizedDesc = data.weather[0].description.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
  captionDesc.textContent = `Current weather in Trier, Germany: ${capitalizedDesc}`;
}

// Invoke the apiFetch function to fetch weather data
apiFetch();


