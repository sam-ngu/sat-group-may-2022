const searchForm = document.getElementById('search-form');
const inputSearch = document.getElementById('input-search');
const currentDayCity = document.getElementById('current-day-city');
const currentDayTemp = document.getElementById('current-day-temp');
const currentDayWind = document.getElementById('current-day-wind');
const currentDayHumidity = document.getElementById('current-day-humidity');

const apiKey = 'd91f911bcf2c0f925fb6535547a5ddc9';



function getOneCallApi(lon, lat){

  return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`)
    .then(function(res){
      return res.json()
    })

}


function getWeatherData(city) {
  
  return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then(function(response){
      return response.json();
    })
    .then(function(currentWeather){

      // console.log(currentWeather);

      return getOneCallApi(currentWeather.coord.lon, currentWeather.coord.lat, currentWeather.dt)
    })
    


}



// when I click on the search button
searchForm.addEventListener('submit', function(event){
  event.preventDefault();

  // get user input
  const userInput = inputSearch.value;
  
  // send req to weatherdashboard api, 
  
  // fetch weather data based on city name
  getWeatherData(userInput)
    .then(function(weatherData){

      console.log(weatherData);

      // once we got the data,
      // populate the data into the dom
      

      // current 
      const datetime = moment(weatherData.current.dt, 'X').format("YYYY-MM-DD");
      console.log(datetime);

      currentDayCity.innerHTML = `${userInput} ${datetime} icon`
      currentDayHumidity.textContent = weatherData.current.humidity;
      currentDayTemp.textContent = weatherData.current.temp + 'K';
      currentDayWind.textContent = weatherData.current.wind_speed + " kmh";
      // store the city name into localstorage
      // render the history in the search list
    })
  
});


