import { useState, useEffect } from 'react'
import { getTrendingMovies } from '../styles/api/tmdb'
const IMG_API = 'https://image.tmdb.org/t/p/w1280';


const useMovieData = () => {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [backDropPath, setBackDropPath] = useState([])


    useEffect(() => {

        getTrendingMovies().then((data) => {
            console.log(data)
            const fetchedMovies = data.results
            setMovies(fetchedMovies)
            setLoading(false)
            const backdrops = fetchedMovies.map(movies => movies.backdrop_path ? `${IMG_API}${movies.backdrop_path}` : null);
            setBackDropPath(backdrops);
        }).catch((err) => {
            setError(err)
            setLoading(false)
        })
    }, [])
    return { movies, loading, error, backDropPath }
}

export default useMovieData
