let superherosList = document.getElementById("superherosList")
let detailedMovieUl = document.getElementById("detailedMovieUl")
let detailedMovie = document.getElementById("detailedMovie")

let apiKey = '741d654c'

// request new GET POST
let request = new XMLHttpRequest

// listener event to get all the batman movies
request.addEventListener('load', function () {

    let result = JSON.parse(this.responseText)

    let batmanMovies = result.Search.map((movie) => {

        return `
        <li>
            <h1>${movie.Title}</h1>
            <img onclick = "detailedImage('${movie.imdbID}')" src = ${movie.Poster} alt = "Movie Poster for ${movie.Title}"/>
            <h3>${movie.Year}</h3>
        </li>
        `


    })
    superherosList.insertAdjacentHTML('beforeend', batmanMovies.join(''))
})

request.open('GET', 'http://www.omdbapi.com/?s=batman&apikey=741d654c')
// make the actual request
request.send() 


// function that shows more details on the movie clicked
function detailedImage(imdbID) {

    // URL with api key for detailed information
    let detailedURL = `http://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}`

    // calling a new GET request 
    let newRequest = new XMLHttpRequest
    newRequest.open('Get', detailedURL)

    newRequest.addEventListener('load', function() {
        let details = JSON.parse(event.currentTarget.responseText)

        let detailedMovies = 
            `
            <div>
            <h2>${details.Title}</h2>
            <img src = ${details.Poster}/>
            <p>${details.Year}</p>
            <p>${details.Rated}</p>
            <p>${details.Released}</p>
            <p>${details.Director}</p>
            </div>
            `
        // this allows for it to be replacable instead of just listing each movie clicked 
        detailedMovie.innerHTML = detailedMovies
    })
    newRequest.send()

}