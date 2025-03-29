import { useEffect, useState } from "react"
import { getSearchedMovies } from "../api/tmdb";
import { useLocation } from "react-router-dom";


const useSearchMovies = () => {
    const [results, setResults] = useState();
    // const location = useLocation();
    // const searchParams = new URLSearchParams(location.search);
    // const query = searchParams.get("search")

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

export default useSearchMovies;