import '../css/Favorite.css'
import { useMovieContext } from '../contexts/MovieContext';
import Card from './MovieCard.jsx';

function Favorite(){
    const { favorites } = useMovieContext();

    if ( favorites.length > 0) {
        return (
            <div className="favoriteHeader">
                <h2>Favorites</h2>
                <div className="movieGrid">
                    {favorites.map((movie) => (
                        <Card movie={movie} key={movie.id} />
                    ))}
                </div>
            </div>
        );
    }

    return(
        <div className="emptyFavorites">
            <h2>No Favorites</h2>
            <p>Click the heart icon to save a movie to favorites</p>
        </div>

    );
}

export default Favorite