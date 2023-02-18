function fetchWeather(){
    let input = document.querySelector('input')
      //convert input to title case
    function titleCase(){
      let sentence = input.value.toLowerCase().split(" ")
      for(let i = 0; i<sentence.length;i++){
        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
      }
       return sentence
    }
     //info
    const info  = {
        url : "https://api.openweathermap.org/data/2.5/weather?q=",
        apiKey : "2c406c653514acbfac676e6f80b1fe3a",
        city : titleCase()
    }
    //fetch the weather and update the values
    fetch(`${info.url}${info.city}&appid=${info.apiKey}&units=metric`)
    .then((response) => response.json())
    .then((response) => {
        console.log(response)
        temp.innerHTML = `${response.main.temp}°C`
        document.getElementById('place-info').innerHTML = `${response.name},${response.sys.country}`
        feels_like.innerHTML = `${response.main.feels_like}°C`
        temp_max.innerHTML = `${response.main.temp_max}°C`
        temp_min.innerHTML = `${response.main.temp_min}°C`
    })
}

