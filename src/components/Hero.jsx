
import useMovies from "../hooks/useMovies";
import useTimeout from "../hooks/useTimeout";


const Hero = () => {
    const { backDropPath, movies } = useMovies();
    const { currentIndex } = useTimeout()
    return (
        <>
            <div className="hero-section" style={{ backgroundImage: `url(${backDropPath[currentIndex]})` }}>
                <div className="hero-movie-container">
                    <div className="hero-movie_name">
                        {movies[currentIndex]?.title}
                    </div>
                    <div className="hero-movie_about">
                        {movies[currentIndex]?.overview}
                    </div>
                    <div className="watch_trailer"></div>
                </div>
            </div>
        </>
    )
}

export default Hero