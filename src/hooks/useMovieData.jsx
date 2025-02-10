import { useState, useEffect} from 'react'

const useMovieData = () => {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const apiKey  = `4dda313898c1119068560316435bf1e2`
        const apiUrl = `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`

        fetch(apiUrl).then (res => {
            if (!res.ok) {
                throw new Error ('Network response not ok')
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

        return {movies, loading, error}
    }

    export default useMovieData
