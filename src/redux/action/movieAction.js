import api from "../api";

const API_KEY = process.env.REACT_APP_API_KEY;

function getMovies() {
  return async dispatch => {
    try {
      dispatch({ type: `GET_MOVIES_REQUEST` });
      const popularMovieApi = api.get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
      const topRatedApi = api.get(`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
      const upComingApi = api.get(`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`);
      const genreAPI = api.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`);

      let [popularMovies, topRatedMovies, upComingMovies, genreList] = await Promise.all([popularMovieApi, topRatedApi, upComingApi, genreAPI]);
      console.log(`genreList`, genreList);
      dispatch({
        type: `GET_MOVIES_SUCCESS`,
        payload: {
          popularMovies: popularMovies.data,
          topRatedMovies: topRatedMovies.data,
          upComingMovies: upComingMovies.data,
          genreList: genreList.data.genres
        }
      });

    } catch (error) {
      dispatch({ type: `GET_MOVIES_FAILURE` });
    };
  };
};

export const movieAction = {
  getMovies,
};