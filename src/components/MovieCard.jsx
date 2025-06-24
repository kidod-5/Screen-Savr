import '../css/MovieCard.css'
import { useMovieContext } from '../contexts/MovieContext';
import { useState } from 'react';

function Card({movie}){
    const {isFavorite, addFavorite, removeFavorite} = useMovieContext();
    const favorite = isFavorite(movie.id);
    const [isFlipped, setIsFlipped] = useState(false);

    function onFavoritePress(e){
        e.preventDefault();
        e.stopPropagation();
        if (favorite) {
            removeFavorite(movie.id);
        } else {
            addFavorite(movie);
        }
    }

    function handleCardClick() {
        setIsFlipped(!isFlipped);
    }
    return (
    <div className={`movieCard ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
        <div className="movieCardInner">
            <div className="movieCardFront">
                <div className="moviePoster">
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
                    <button className={`favBtn ${favorite ? "active" : ""}`} onClick={onFavoritePress}> ♡ </button>
                    <div className="movieOverlay">
                    </div>
                </div>
                <div className="movieInfo">
                    <h3>{movie.title}</h3>
                    <p>{movie.release_date?.split("-")[0]}</p>
                </div>
            </div>
            <div className="movieCardBack">
                <div className="backContent">
                    <h3>{movie.title}</h3>
                    <p className="rating">★ {movie.vote_average}/10</p>
                    <p className="overview">{movie.overview}</p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Card