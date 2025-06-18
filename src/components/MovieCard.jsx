import '../css/MovieCard.css'
import { useMovieContext } from '../contexts/MovieContext';

function Card({movie}){
    const {isFavorite, addFavorite, removeFavorite} = useMovieContext();
    const favorite = isFavorite(movie.id);

    function onFavoritePress(e){
        e.preventDefault();
        if (favorite) {
            removeFavorite(movie.id);
        } else {
            addFavorite(movie);
        }
    }
    return (
    <div className="movieCard">
        <div className="moviePoster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
            <div className="movieOverlay">
                <button className={`favBtn ${favorite ? "active" : ""}`} onClick={onFavoritePress}> ♡ </button>
            </div>
        </div>
        <div className="movieInfo">
            <h3>{movie.title}</h3>
            <p>{movie.release_date?.split("-")[0]}</p>
        </div>
    </div>
    );
}

export default Card