import * as React from "react";

interface IMovie {
    Poster: string;
    Title: string;
    Type: string;
    Year: string;
    imdbID: string;
}

const Movie = ({movie}: {movie: IMovie}) => {

  const {Poster, Title, Type, Year, imdbID} = movie;

  return(
    <div className="column is-6">
      <div className="card">
        <div className="media">
          <div className="media-left">
            <figure className="image">
              <img src={Poster} alt={Title} style={{width: "150px"}}/>
            </figure>
          </div>
          <div className="media-content">
            <br/>
            <p className="title is-4">{Title}</p>
            <p className="subtitle is-6">
            Year Released: {Year}
            <br/>
            IMDB ID: {imdbID}
          </p>
          <a className="button" href="./movies/{imdbID}">View Detail</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Movie;
