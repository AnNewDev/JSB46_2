// Tạo biến
const apiKey = "93b22be5b84074b6ef1393f65e6b983d"; 
const searchBtn = document.getElementById("search-btn");
const locationBtn = document.getElementById("location-btn");
const cityInput = document.getElementById("city-input");
const weatherResult = document.getElementById("weather-result");

// Fetch dữ liệu từ api theo tên thành phố
async function getWeatherByCity(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        weatherResult.innerHTML = "<p class='text-danger'>Error fetching data. Please check the city name.</p>";
    }
}

// Fetch dữ liệu từ api theo vị trí
async function getWeatherByLocation(lat, lon) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        weatherResult.innerHTML = "<p class='text-danger'>Error fetching data. Try again.</p>";
    }
}

// Chuyển đổi kiểu dữ liệu timestamp sang thời gian
function formatTime(timestamp) {
    const date = new Date(timestamp * 1000); // Convert seconds to milliseconds
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
}


// Hiển thị dữ liệu
function displayWeather(data) {
    if (data.cod === 200) {
        weatherResult.innerHTML = `
            <h3>${data.name}, ${data.sys.country}</h3>
            <img class="weather-icon" src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather Icon">
            <h2>${data.main.temp}°C</h2>
            <p>${data.weather[0].description}</p>
            <p>Feels like: ${data.main.feels_like}°C</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Sunrise: ${formatTime(data.sys.sunrise)}</p>
            <p>Sunset: ${formatTime(data.sys.sunset)}</p>
        `;
    } else {
        weatherResult.innerHTML = `<p class="text-danger">City not found. Please try again.</p>`;
    }
}

// Add event listener cho search button
searchBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();
    if (city) {
        getWeatherByCity(city);
    } else {
        alert("Please enter a city name.");
    }
});

// Add event listener cho location button
locationBtn.addEventListener("click", () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                getWeatherByLocation(lat, lon);
            },
            () => {
                alert("Location access denied. Please enable it and try again.");
            }
        );
    } else {
        alert("Geolocation is not supported by this browser.");
    }
});