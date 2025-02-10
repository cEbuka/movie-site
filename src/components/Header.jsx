{/*import SearchBar from "./SearchBar"*/}
import mlogo from "../assets/logo.png"
import menu_icon from "../assets/menu_icon.png"
import "../styles/header.css"

const Header = () => {
    return (
        <>
            <header>
                <div className="movie-box">
                    <img 
                    alt="movie_box"
                    src={mlogo}
                    />
                </div>
                {/*<div className="searchbar">
                    <SearchBar />
    </div>*/}
                <div className="menu-icon">
                    <h1 className="sign_in">Sign in</h1>
                    <img
                    alt="menu_icon"
                    src={menu_icon}
                    />
                </div>
            </header>
        </>
    )
}

export default Header