import { useEffect, useState } from "react"
import { getSearchedMovies } from "../styles/api/tmdb";


const useSearchMovies = () => {
    const [results, setResults] = useState();


    useEffect(() => {

        getSearchedMovies().then(data => {
            const searchedMovies = data.results;
            if (searchedMovies) {
                setResults(searchedMovies);
                console.log(data);
            }

        })
    }, [])
    return { results }
}

getSearchedMovies()

export default useSearchMovies