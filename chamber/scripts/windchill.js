function calculateWindChill(temperature, windSpeed) {
    // Check if the input values meet the specification limits
    if (temperature <= 50 && windSpeed > 3.0) {
      // Calculate the wind chill factor using the formula
      const windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
      
      return windChill.toFixed(2); // Return the wind chill factor with 2 decimal places
    } else {
      // If the input values do not meet the requirements, return "N/A"
      return "N/A";
    }
  }
  
  // Extract temperature and wind speed values from the HTML and calculate wind chill
  const currentTemperature = parseFloat(document.getElementById("temperature").textContent);
  const currentWindSpeed = parseFloat(document.getElementById("windSpeed").textContent);
  
  const windChill = calculateWindChill(currentTemperature, currentWindSpeed);
  
  // Update the wind chill value in the HTML
  document.getElementById("windChillValue").textContent = windChill;
  