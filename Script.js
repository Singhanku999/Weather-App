// script.js
document.getElementById('getWeather').addEventListener('click', function () {
    const city = document.getElementById('city').value;
    const apiKey = 'd9d11b9bb9bc6d3cfb9608cc0a743355'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    const weatherInfoDiv = document.getElementById('weatherInfo');
    const loadingDiv = document.getElementById('loading');
  
    if (!city) {
      alert('Please enter a city name!');
      return;
    }
  
    // Show loading indicator
    weatherInfoDiv.classList.add('hidden');
    loadingDiv.classList.remove('hidden');
  
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('City not found');
        }
        return response.json();
      })
      .then(data => {
        // Update weather details
        const weatherInfo = `
          <h2>${data.name}, ${data.sys.country}</h2>
          <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
          <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
          <p><strong>Weather:</strong> ${data.weather[0].description}</p>
        `;
        weatherInfoDiv.innerHTML = weatherInfo;
  
        // Show weather info and hide loading
        loadingDiv.classList.add('hidden');
        weatherInfoDiv.classList.remove('hidden');
      })
      .catch(error => {
        weatherInfoDiv.innerHTML = `<p style="color: red;">${error.message}</p>`;
        loadingDiv.classList.add('hidden');
        weatherInfoDiv.classList.remove('hidden');
      });
  });
  
