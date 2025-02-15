import useMovieData from "../hooks/useMovieData"
import "../styles/hero.css"
import Header from "./Header"

const Hero = () => {
    const {backDropPath} = useMovieData();
    return (
    <>
    <div className="hero-section">
        <img className="hero-image" src={`${backDropPath}`} alt="hero_image"/>
        <Header />
        <div className="hero-movie-container">
        <div className="hero-movie_name">
        John Wick 3 : Parabellum
        </div>
        <div className="hero-movie_about">
        John Wick is on the run after killing a member of the international assassins' guild, and 
        with a $14 million price tag on his head, he is the target of hit men and women everywhere.
        </div>
        <div className="watch_trailer"></div>
        </div>
    </div>
    </>
    )
}

export default Hero