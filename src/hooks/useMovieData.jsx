import { useState, useEffect, useRef } from 'react'
import { getTrendingMovies } from '../styles/api/tmdb'


const useMovieData = () => {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const backdropUrl = useRef('');

    useEffect(() => {

        getTrendingMovies().then((data) => {
            console.log(data)
            const fetchedMovies = data.results
            setMovies(fetchedMovies)
            setLoading(false)
            backdropUrl.current = data.results[0].backdrop_path;
        }).catch((err) => {
            setError(err)
            setLoading(false)
        })
    }, [])

    return { movies, loading, error, backdropUrl: backdropUrl.current }
}

export default useMovieData
