
import { Form, Link } from "react-router-dom"
import { FaFacebook } from "react-icons/fa"


const Header = () => {
    return (
        <>
            <header>
                <Link to="/" className="movie-box">
                    <img
                        alt="movie_box"
                        src={"logo.png"}
                    />
                </Link>
                <div className="search-box">
                    <form method="post">
                        <input />
                        <button type="submit">
                            Search
                        </button>
                    </form>
                   

                </div>
                <div className="menu-icon">
                    <Link to={`/signup`} className="sign_in">Sign in
                    </Link>
                    <FaFacebook/>
                </div>
            </header>
        </>
    )
}

export default Header