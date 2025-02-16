
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
                    <h1 className="sign_in">Sign in <span><img
                        alt="menu_icon"
                        src={menu_icon}
                    /></span></h1>

                </div>
            </header>
        </>
    )
}

export default Header