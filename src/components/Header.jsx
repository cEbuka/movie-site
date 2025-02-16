
import { Link } from "react-router-dom"
import menu_icon from "../assets/menu_icon.png"
import "../styles/header.css"

const Header = () => {
    return (
        <>
            <header>
                <div className="movie-box">
                    <img
                        alt="movie_box"
                        src={"logo.png"}
                    />
                </div>


                <div className="menu-icon">
                    <Link to={`/signup`} className="sign_in">Sign in <span><img
                        alt="menu_icon"
                        src={menu_icon}
                    /></span></Link>

                </div>
            </header>
        </>
    )
}

export default Header