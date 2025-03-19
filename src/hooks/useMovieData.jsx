import { useState, useEffect } from 'react'
import { getTrendingMovies } from '../api/tmdb';
const IMG_API = 'https://image.tmdb.org/t/p/w1280';


const useMovieData = () => {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [backDropPath, setBackDropPath] = useState([])


    useEffect(() => {
        const savedTrending = localStorage.getItem('trendingMovies');
        const savedBackdropPath = localStorage.getItem('backDropPath');
        if (savedTrending) {
            setMovies(JSON.parse(savedTrending));

        }
        if (savedBackdropPath) {
            setBackDropPath(JSON.parse(savedBackdropPath));
        }

        getTrendingMovies().then((data) => {
            const fetchedMovies = data.results
            if (fetchedMovies) {
                setMovies(fetchedMovies)
                localStorage.setItem('trendingMovies', JSON.stringify(fetchedMovies));
            }
            setLoading(false)
            const backdrops = fetchedMovies.map(movies => movies.backdrop_path ? `${IMG_API}${movies.backdrop_path}` : null);
            if (backdrops) {
                setBackDropPath(backdrops);
                localStorage.setItem('backDropPath', JSON.stringify(backdrops));
            }
        }).catch((err) => {
            setError(err)
            setLoading(false)
        })
    }, [])
    return { movies, loading, error, backDropPath }
}

export default useMovieData
