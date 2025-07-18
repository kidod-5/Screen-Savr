import { useState, useEffect } from 'react';
import Card from '../components/MovieCard.jsx';
import { searchMovies, fetchPopularMovies, fetchMoreMovies } from '../services/api.js';
import '../css/Home.css'

function Home(){

    const [searchQ,setSearchQ] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(2);


    useEffect(() => {
        const loadMovies = async () => {
            try {
                const popularMovies = await fetchPopularMovies();
                setMovies(popularMovies);
            } catch (err) {
                setError("Failed to fetch movies. Please try again later.");
                console.error("Error fetching movies:", err);
            }
            finally{
                setLoading(false);
            }
        };

        loadMovies();
    }, []);


    const handleSearch = async(e) => {
        e.preventDefault()
        if (!searchQ.trim()) return;
        if (loading) return; 
        setLoading(true);

        try {
            const searchResults = await searchMovies(searchQ);
            setMovies(searchResults);
            setError(null);
        } catch (err) {
            console.log("Error searching movies:", err);
            setError("Failed to fetch search results. Please try again later.");

        } finally{
            setLoading(false);
        }
        
    };

    const handleLoadMore = async () => {
        if (loading) return;
        setLoading(true);

        try {
            const moreMovies = await fetchMoreMovies(page);
            setMovies((prevMovies) => [...prevMovies, ...moreMovies]);
            setPage((prevPage) => prevPage + 1);
        } catch (err) {
            setError("Failed to load more movies. Please try again later.");
            console.error("Error loading more movies:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="searchMovie">
                <input 
                    type="text" 
                    placeholder="Search for a movie..." 
                    className="searchInput"
                    value={searchQ}
                    onChange={(e) => setSearchQ(e.target.value)}
                />
            
                <button type="submit" className="searchButton">Search</button>
            </form>
                {error ? <div className="error">{error}</div> : null}

            {loading ? <div className="loading">Loading...</div> : null}
            <div className="movieGrid">
                {movies.map((movie) => 
                    movie.title.toLowerCase().startsWith(searchQ) && (<Card movie={movie} key={movie.id}/>
                ))}
            </div>
            <button className="loadMoreButton" onClick={handleLoadMore}>Load More</button>
        </div>    
    );
}

export default Home