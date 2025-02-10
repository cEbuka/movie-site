import { useState, useEffect } from 'react'
import  dotenv  from 'dotenv'
dotenv.config()

const useMovieData = () => {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const apiKey = import.meta.env.API_KEY

    useEffect(() => {
        
        const apiUrl = `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`

        fetch(apiUrl).then(res => {
            if (!res.ok) {
                throw new Error('Network response not ok')
            }
            return res.json()
        })
            .then((data) => {
                console.log(data)
                const fetchedMovies = data.results
                setMovies(fetchedMovies)
                setLoading(false)
            })
            .catch((err) => {
                setError(err)
                setLoading(false)
            })
    }, [])

    return { movies, loading, error }
}

export default useMovieData
