const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = '79a2d130c3c4efe196a50e720cbfcedc';

export const fetchPopularMovies = async () => {
  const response = await fetch(`${API_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const fetchMoreMovies = async (page) => {
    const response = await fetch(
        `${API_URL}/movie/popular?api_key=${API_KEY}&page=${page}`
    );
    const data = await response.json(); 
    return data.results;
};            

export const searchMovies = async (query) => {
    const response = await fetch(
        `${API_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
        query
    )}`
);
    const data = await response.json();
    return data.results;
}
