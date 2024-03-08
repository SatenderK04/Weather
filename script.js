const API_key = "da3c3437b5200edf94ea7f96cc9783f1";
// let city = 'Delhi';
const API_url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

let weatherIcon = document.querySelector('.weather-icon');
async function getWheather(city){
    
    // const API_url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${API_key}`;
    const response = await fetch(API_url + city + `&appid=${API_key}`);
    if(response.status == 404){
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
        document.querySelector('.card').style.background = 'linear-gradient(130deg, red, orange)';
    }else{
        let data = await response.json();
    // console.log(data);
    
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.humidity').innerHTML = data.main.humidity;
        document.querySelector('.temp').innerHTML = Math.floor(data.main.temp)+'°C';
        document.querySelector('.wind').innerHTML = Math.floor(data.wind.speed)+' km/h';

        if(data.weather[0].main == 'Clouds'){
            weatherIcon.src = "images/clouds.png";
        }else if(data.weather[0].main == 'Clear'){
            weatherIcon.src = "images/clear.png";
        }else if(data.weather[0].main == 'Rain'){
            weatherIcon.src = "images/rain.png";
        }else if(data.weather[0].main == 'Snow'){
            weatherIcon.src = "images/snow.png";
        }else if(data.weather[0].main == 'Drizzle'){
            weatherIcon.src = "images/drizzle.png";
        }

        document.querySelector('.error').style.display = 'none';
        document.querySelector('.weather').style.display = 'block';
        document.querySelector('.card').style.background = 'linear-gradient(120deg, rgba(63, 146, 240, 0.87), rgb(88, 207, 233))';
    }
    
}

let city = document.querySelector('#city-entered');
let search = document.querySelector('.btn');
search.addEventListener('click', ()=>{
    getWheather(city.value);
});

