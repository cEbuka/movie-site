import useMovieData from "../hooks/useMovieData"
import Hero from "./Hero"
import { Fragment } from "react"

const MoviesList = () => {
    const { movies } = useMovieData()
    return (
        <Fragment>

            <div className="movies-section">
                <Hero />
                <h1>Featured Movies</h1>
                <div className="movie-card">
                    {movies?.map((movie) =>
                        <div key={movie.id}>
                            <img className="movie-image" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movie_picture" />
                            <div className="movie-details">
                                <span data-testid="movie-title" className="movie-title">{movie.title}</span>
                                <span data-testid="movie_overview" >{movie.overview}</span>
                            </div>
                        </div>)}
                </div>
            </div>
        </Fragment>
    )
}

export default MoviesList
