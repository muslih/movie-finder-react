import * as React from "react";
import { useState } from "react";
import axios from "axios";
import { RouteComponentProps } from '@reach/router';

interface IMovieDetail {
  imdbid: string;
}

interface MovieData {
  Actors: string;
  Awards: string;
  Country: string;
  Director: string;
  Genre: string;
  Plot: string;
  Poster: string;
  Production: string;
  Title: string;
  Runtime: string;
  Type: string;
  Writer: string;
  Year: string;
  imdbRating: string;
  imdbVotes: string;
  Error?: string;
}

const getMovieDetail = (imdbid: string) => {
  try {
    return axios.get(`http://www.omdbapi.com/?apikey=faf7e5bb&i=${imdbid}`)
  } catch (error) {
    console.error(error)
  }
}

const MovieDetail: React.FC<RouteComponentProps<IMovieDetail>> = ({imdbid}) => {
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [movieData, setMovieData] =  useState(null) ;
  console.log(imdbid)
  React.useEffect( ()=>{
    getMovieDetail(imdbid)
    .then(response => {
      const {data} = response;
      if (!!data && !movieData) {
      setMovieData(data)
      setLoading(false)

      }
    })
    .catch(error => {
      setError(error)
      console.log(error)
    })
  },[])

  if (error) {
    return <>{error}</>
  }
  if (movieData && movieData?.Error) {
    return <> {movieData.Error}</>
  }

  const link = `http://www.imdb.com/title/${imdbid}`;

  return(
    <div className="container">
      <div className="hero-body">
        <div className="column">
          <div className="box">
            {isLoading && <div>Loading data....</div>}
            {!isLoading && (
              <div className="media">
                <div className="media-left">
                  <figure className="image">
                    <img src={movieData.Poster} alt={movieData.Title} style={{width: "250px"}}/>
                  </figure>
                </div>
                <div className="media-content">
                  <p className="title is-4">{movieData.Title}</p>
                  <p className="subtitle is-6">
                  {movieData.Plot}
                  </p>
                  <p>
                  <b>Production: </b> {movieData.Production}
                  </p>
                  <p>
                  <b>Director: </b> {movieData.Director}
                  </p>
                  <p>
                  <b>Writers : </b> {movieData.Writer}
                  </p>
                  <p>
                  <b>Stars: </b> {movieData.Actors}
                  </p>
                  <p>
                  <b>Genre: </b> {movieData.Genre}
                  </p>
                  <p>
                  <b>Country: </b> {movieData.Country}
                  </p>
                  <p>
                  <b>Runtime: </b> {movieData.Runtime}
                  </p>
                  <p>
                    <b>Released:</b> {movieData.Released}
                  </p>
                  <p>
                    <b>IMDB Rating:</b> {movieData.imdbRating}
                  </p>
                  <p className="subtitle is-6">
                  <b>IMDB ID:</b> {imdbid}
                  </p>
                <a className="button" href={link}>View on IMDB</a>
                <a className="button" href="/">Back</a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetail;
