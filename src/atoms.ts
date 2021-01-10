import { atom } from 'jotai'
import axios from "axios";

interface Movie {
    Poster: string;
    Title: string;
    Type: string;
    Year: string;
    imdbID: string;
}
export const isLoadingAtom = atom(false);
export const movieTitleAtom = atom<string>("")
export const moviePageAtom = atom<number>(1)
export const movieIdAtom = atom<number>(9001)
export const movieDataAtom = atom<Movie[]>([])


export const fetchMoviesAtom = atom(null, (_get, set, title) => {
  // set(movieTitleAtom, title)
    const runFetch =  async ()=> {
    const endpointUrl = `http://www.omdbapi.com/?apikey=faf7e5bb&s=${title}&page=1`;
    const response = await axios({
      url: endpointUrl,
      method: 'get'
    })
    const {Search} = response.data;
    set(movieTitleAtom, title);
    set(movieDataAtom, Search);
    set(isLoadingAtom, false)
  }
  runFetch();
});
