document.getElementById('fetchWeatherBtn').addEventListener('click', function() {
    const location = document.getElementById('locationInput').value;
    fetchWeatherData(location);
});

function fetchWeatherData(location) {
    const apiKey = '319c96e6da067a952adfd897f3fd7f35';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            if (data.cod === 200) {
                document.getElementById('locationName').textContent = data.name;
                document.getElementById('weatherCondition').textContent = data.weather[0].description;
                document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
            } else {
                alert('Location not found. Please try again with a valid city name.');
            }
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
            alert(`Error fetching the weather data: ${error.message}`);
        });
}
