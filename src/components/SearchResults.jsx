
import useSearchMovies from "../hooks/useSearchMovies";

const SearchResults = () => {

    const { results } = useSearchMovies();


    return (
        <div><h1>Search results</h1>
            <div>{results?.map((index, result) => {
                <div key={index}>
                    <img src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`} alt={result.title} />
                    <div>{result.release_date}</div>
                    <div>{result.title}</div>
                </div>
            })}</div>
        </div>

    )
}

export default SearchResults