import { Component } from 'react';

class Movies extends Component{
    constructor(){
      super();
      this.state = {
          movieData: []
      }
    }


    handleResult = (e) => {
        fetch("https://ghibliapi.herokuapp.com/films")
        .then(res => res.json())
        .then((data) => {
            this.setState({
                movieData: data
            })
            console.log(this.state.movieData); 
        });
    }
  
    componentDidMount(){
      this.handleResult();
    }
    render(){

        let moviesList = this.state.movieData.map((movies) => {
            return(
                <option>
                        {movies.original_title_romanised}
                </option>
               
               )
            })
            return(
                
                <div className="movies">
            <h1>Select a Movie</h1>
            <form id="movie-selector">
              <select name="movie-selector">
              <option value="default"> </option>
                { moviesList }
              <input type="submit" value="Go"/>
              </select>
            </form>

            <div className="movie-descriptions">
                <div>Title:{moviesList.original_title_romanised}</div>
                <div>Release Date:</div>
                <div>Description:</div>
            </div>
        </div>
      )
    }
  }

  export default Movies;
  
  