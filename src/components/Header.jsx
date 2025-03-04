
import { Form, Link } from "react-router-dom"
import FaMenu from "react-icons/fa"


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
                    <Form method="post">
                        <input />
                        <button>
                            Search
                        </button>
                    </Form>

                </div>
                <div className="menu-icon">
                    <Link to={`/signup`} className="sign_in">Sign in
                    </Link>
                    <FaMenu />
                </div>
            </header>
        </>
    )
}

export default Header