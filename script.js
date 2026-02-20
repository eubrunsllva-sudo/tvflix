fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', {
    method: 'GET',
    headers: {
        accept: 'application/json',
        authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Yzc3ZDIyMjVlZWFiZmQ2ZDdmZDg4YzY1ZTgxYTAyZSIsIm5iZiI6MTc3MTU0MjgwNy41MTcsInN1YiI6IjY5OTc5OTE3N2M4YzJlZTYxZWM5OTQwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Nv7R_t7xtRQsxgjs4sOEw6BIzX4OIqOxz8GWJCwEniU'
    }
})
.then(function(response) {
        return response.json()
    })
    
    .then(function (data) {
        console.log(data.results);
    })

