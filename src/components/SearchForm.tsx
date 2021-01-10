import * as React from "react";
import { useAtom } from "jotai";
import {isLoadingAtom, fetchMoviesAtom} from "../atoms";

const SearchForm = () => {
  const [loading, setLoading] = useAtom(isLoadingAtom)
  const [, fetchMovies] = useAtom(fetchMoviesAtom)
  const handleSubmit = (e) => {
    e.preventDefault();
    const movieTitle = e.target.movieTitle.value
    setLoading(true);
    fetchMovies(movieTitle)
  }
  return(
    <div className="panel">
      <p className="panel-heading">
        Search for a Movie
      </p>
      <form className="box" onSubmit={(e) => handleSubmit(e)}>
        <div className="field has-addons">
          <p className="control is-expanded">
            <input className="input" type="text" name="movieTitle" placeholder="Put any movie title"/>
          </p>
          <p className="control">
            <input type="submit" className="button" value="Search Movies"/>
          </p>
        </div>
      </form>
    </div>
  )
}

export default SearchForm;
