import useMovieData from "../hooks/useMovieData"
import Hero from "./Hero"
import { Fragment } from "react"

const MoviesList = () => {
    const { movies } = useMovieData()
    return (
        <Fragment>
            <Hero />
            <h1>Featured Movies</h1>
            <div className="movie-list">
                {movies?.map((movie) =>
                    <div key={movie.id} className="movie-card">
                        <img className="movie-image" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movie_picture" />
                        <div className="movie-details">
                            <span className="movie-title">{movie.title}</span>
                            <span className="movie-overview">{movie.overview}</span>
                        </div>
                    </div>)}
            </div>

        </Fragment>
    )
}

export default MoviesList
