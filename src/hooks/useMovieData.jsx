import { useState, useEffect, useRef } from 'react'
import { getTrendingMovies } from '../styles/api/tmdb'


const useMovieData = () => {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    // const [backDrops, setBackDrops] = useState([])
    

    useEffect(() => {

        getTrendingMovies().then((data) => {
            console.log(data)
            const fetchedMovies = data.results
            setMovies(fetchedMovies)
            setLoading(false)
            // if (fetchedMovies.backdrop_path?.length > 0) {
            //     setBackDrops
            // }
        }).catch((err) => {
            setError(err)
            setLoading(false)
        })
    }, [])
    

    return { movies, loading, error}
}

export default useMovieData
