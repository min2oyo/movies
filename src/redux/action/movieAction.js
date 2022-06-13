import api from "../api";

const API_KEY = process.env.REACT_APP_API_KEY;

function getMovies() {
  return async dispatch => {
    try {
      dispatch({ type: `GET_MOVIES_REQUEST` });
      const popularMovieApi = api.get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
      const topRateApi = api.get(`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
      const upComingApi = api.get(`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`);

      let [popularMovies, topRateMovies, upComingMovies] = await Promise.all([popularMovieApi, topRateApi, upComingApi]);

      dispatch({
        type: `GET_MOVIES_SUCCESS`,
        payload: { popularMovies: popularMovies.data, topRateMovies: topRateMovies.data, upComingMovies: upComingMovies.data }
      });

    } catch (error) {
      dispatch({ type: `GET_MOVIES_FAILURE` });
    };
  };
};

export const movieAction = {
  getMovies,
};