import { FaPlay } from "react-icons/fa"
import getMovieData from "../hooks/useMovieData"
import Hero from "./Hero"
import { Fragment } from "react"
import { useLoaderData } from "react-router-dom";


export function loader() {
    const movies = getMovieData();
    return {movies}
    
}



const MoviesList = () => {
    const { movies } = useLoaderData()
    
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
                        <div className="movie-control">
                            <button><FaPlay /></button>
                        </div>
                    </div>)}
            </div>

        </Fragment>
    )
}

export default MoviesList
