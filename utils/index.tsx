import { Movie } from "types";
import axios from "axios";


export const getMovies = async () => {
  const response = await axios(
    "https://api.themoviedb.org/3/movie/popular?api_key=6ddb52795907072b02f903812832c791&language=en-US&page=1"
  );
  const data = response.data;
  const movie: Movie[] = data?.results;
  return movie;
};
