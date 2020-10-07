let userCity = document.getElementById("userCity")
let inputButton = document.getElementById("inputButton")
let output = document.getElementById("output")

inputButton.addEventListener('click', () => {
    let city = userCity.value 
    let weatherURL = 'http://api.openweathermap.org/data/2.5/weather?q=houston,us&appid=b03c84e681bb01ab2cc1784c552b1277&units=imperial'

    fetch(weatherURL)
    .then((response) => {
        return response.json()
    }) .then((json) => {
        display(json)
    }) .catch((error) => {
        console.log(error)
    })

    function display(json) {
        let something = Object.values(json)
        console.log(something)
        let temp = `
        <h1>${something[11]}</h1>
        <label><b>Temperature</b> ${something[3].temp}</label><br>
        <label><b>Min Temperature</b> ${something[3].temp_min}</label><br>
        <label><b>Max Temperature</b> ${something[3].temp_max}</label><br>
        <label><b>Pressure</b> ${something[3].pressure}</label>
        `
        output.innerHTML = temp
    }

    
})