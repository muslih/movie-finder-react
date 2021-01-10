import * as React from "react";
import { useAtom } from "jotai";
import {isLoadingAtom, movieTitleAtom, movieDataAtom} from "../atoms";
import SearchForm from "./SearchForm";
import MovieResult from "./MovieResult";

interface IMovie {
    Poster: string;
    Title: string;
    Type: string;
    Year: string;
    imdbID: string;
}

const Home = () => {
  const [isLoading] = useAtom(isLoadingAtom);
  const  [movieTitle]  = useAtom(movieTitleAtom);
  const  [movieData]  = useAtom(movieDataAtom);

  return(
    <div className="container">
      <div className="hero-body">
        <h1 className="title">Movie Finder</h1>
        <SearchForm/>
        {isLoading && <>Fetching data....</>}
        {!isLoading && movieData &&
            <MovieResult title={movieTitle} movies={movieData} />
        }
      </div>
    </div>
  )
}

export default Home;
