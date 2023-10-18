function getApi(){
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        this.response = this.responseText;
        let movies = JSON.parse(this.response)
        console.log(movies);

        let html = "";
        movies.forEach(movie => {
            let title = movie.Title;
            let plot = movie.Plot;

            template = `
                <div class="col-sm-6" style="margin-top: 20px; margin-bottom: 20px">
                    <div class="card h-100 shadow p-3" style="padding:20px">
                        <div class="card-body mx-auto">
                            <div class="card-title">
                                <h3 class="movie-title">${title}</h1>
                            </div>
                            <div class="card-text">
                                <p class-"movie-plot">${plot}</p>
                            </div>
                        </div>
                        
                    </div>  
                </div>
            `

            html = html + template;
        });
        document.getElementById("show").innerHTML = html;
    }
    xhttp.open("GET", "http://it-its.id/api/movies", true);
    xhttp.send();

}