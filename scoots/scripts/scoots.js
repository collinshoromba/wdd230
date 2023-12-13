const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

function navToggle() {
  btn.classList.toggle('open')
  nav.classList.toggle('hidden')
  document.body.classList.toggle('no-scroll')
}

btn.addEventListener('click', navToggle)




//Weather info

// the elements from the document
const message = document.getElementById("message");
const closeBtn = document.getElementById("close-btn");
const tempMax = document.getElementById("temp-max");
const temp = document.getElementById("temp");
const humidity = document.getElementById("humidity");
const main = document.getElementById("main");
const description = document.getElementById("description");
const icon = document.getElementById("icon");
const forecast = document.getElementById("forecast");

const apiKey = "807a06fe21a581ca08e4f84347eba1d9";
const apiUrl = "https://api.openweathermap.org/data/2.5/";

// function to fetch the weather data
async function getWeatherData() {
  try {
    // current weather data
    const response = await fetch(apiUrl + "weather?q=Cozumel&units=metric&appid=" + apiKey);
    const data = await response.json();
    // current weather data on the page
    tempMax.textContent = Math.round(data.main.temp_max);
    temp.textContent = Math.round(data.main.temp);
    humidity.textContent = data.main.humidity;
    main.textContent = data.weather[0].main;
    description.textContent = data.weather[0].description;
    icon.src = "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
    //  forecast data 
    const response2 = await fetch(apiUrl + "forecast?q=Cozumel&units=metric&appid=" + apiKey);
    const data2 = await response2.json();
    // forecast data for tomorrow at 15:00
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(15, 0, 0, 0);
    const forecastData = data2.list.find(item => new Date(item.dt_txt).getTime() === tomorrow.getTime());
    //  forecast data on the page
    forecast.textContent = Math.round(forecastData.main.temp);
  } catch (error) {
    // Handle any errors
    console.error(error);
  }
}

// function to close the message
function closeMessage() {
  message.style.display = "none";
}

// how to close the close button
closeBtn.addEventListener("click", closeMessage);

// getWeatherData function when the page loads
getWeatherData();



//RENTALS DATA

$(document).ready(function() {
  // Fetch the JSON data from the rentals.json file
  $.getJSON("data/rentals.json", function(data) {
    // Loop through the array of objects
    $.each(data, function(index, rental) {
      // Create a table row element
      var tr = $("<tr></tr>");
      // Append table data elements for each property and value
      tr.append($("<td></td>").text(rental.type));
      tr.append($("<td></td>").text(rental.maxPersons));
      tr.append($("<td></td>").text("$" + rental.reservationHalfDay));
      tr.append($("<td></td>").text("$" + rental.reservationFullDay));
      tr.append($("<td></td>").text("$" + rental.walkInHalfDay));
      tr.append($("<td></td>").text("$" + rental.walkInFullDay));
      // Append the table row to the table body
      $("tbody").append(tr);
    });
  });
});


//reservations

document.getElementById('rentalForm').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Form submitted');
});
