import * as React from "react";
import Movie from "./Movie";

interface IMovie {
    Poster: string;
    Title: string;
    Type: string;
    Year: string;
    imdbID: string;
}

interface IMovieResult {
  title: string;
  movies: IMovie[];
}

const MovieResult = ({movies, title}: IMovieResult) => {
  return(
    <div className="hero">

      {!!title.length && 
      <span className="title">Result for: {title}</span>
      }

      {!!title && !movies.length && <h3 className="title"> No result found!</h3>}

      <div className="columns is-multiline">
      {
        !!movies.length && movies.map(function(movie, i){
          return(
            <Movie movie={movie} key={i} />
          )
        })
      }
    </div>
    </div>
  )
}

export default MovieResult;
