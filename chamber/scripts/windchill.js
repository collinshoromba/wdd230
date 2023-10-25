function calculateWindChill(temperature, windSpeed) {
    
    if (temperature <= 50 && windSpeed > 3.0) {
      
      const windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
      
      return windChill.toFixed(2); 
    } else {
      
      return "N/A";
    }
  }
  

  const currentTemperature = parseFloat(document.getElementById("temperature").textContent);
  const currentWindSpeed = parseFloat(document.getElementById("windSpeed").textContent);
  
  const windChill = calculateWindChill(currentTemperature, currentWindSpeed);
  
  
  document.getElementById("windChillValue").textContent = windChill;
  