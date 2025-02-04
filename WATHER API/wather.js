document.querySelector('#btn').addEventListener('click', () => {
    let city = document.querySelector('#search').value;

    if (city.trim() === "") {
        alert("Please enter a city name!");
        return;
    }

    const APIKey = "18f7836bce9afc7cf3410afff7e6268a"; // Replace with your OpenWeatherMap API key

    fetch(`https://openweathermap.org/find?q=${city}&units=metric&appid=${APIKey}`)
        .then(res => res.json())
        .then((data) => {
            console.log(data);

            let weatherDetail = document.querySelector("#weatherDetail");

            // Clear previous weather details
            weatherDetail.innerHTML = "";

            if (data.cod === 200) {
                // Display city name
                let cityName = document.createElement('h2');
                cityName.innerHTML = `Weather in ${data.name}, ${data.sys.country}`;
                weatherDetail.appendChild(cityName);

                // Display temperature
                let temp = document.createElement('p');
                temp.innerHTML = `Temperature: ${data.main.temp}°C`;
                weatherDetail.appendChild(temp);

                // Display weather description
                let description = document.createElement('p');
                description.innerHTML = `Weather: ${data.weather[0].description}`;
                weatherDetail.appendChild(description);

                // Display humidity
                let humidity = document.createElement('p');
                humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
                weatherDetail.appendChild(humidity);

                // Display wind speed
                let windSpeed = document.createElement('p');
                windSpeed.innerHTML = `Wind Speed: ${data.wind.speed} m/s`;
                weatherDetail.appendChild(windSpeed);
            } else {
                weatherDetail.innerHTML = `<p style="color: red;">City not found or an error occurred!</p>`;
            }
        })
        .catch(err => {
            console.log(err);
            alert("Something went wrong! Please try again.");
        });
});
