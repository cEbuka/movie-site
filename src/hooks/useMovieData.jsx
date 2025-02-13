import { useState, useEffect, useRef } from 'react'
import { getTrendingMovies } from '../styles/api/tmdb'


const useMovieData = () => {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    

    useEffect(() => {

        getTrendingMovies().then((data) => {
            console.log(data)
            const fetchedMovies = data.results
            setMovies(fetchedMovies)
            setLoading(false)
            
        }).catch((err) => {
            setError(err)
            setLoading(false)
        })
    }, [])
    

    return { movies, loading, error, movies[1].backdrop_path}
}

export default useMovieData
