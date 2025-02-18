
import { Form, Link } from "react-router-dom"
import menu_icon from "../assets/menu_icon.png"
import MoviesList from "./MoviesList"


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

                <Form method="post" className="search-form">
                    <div className="search-box">
                        <input />
                        <button>
                          Sign in
                        </button>
                    </div>
                </Form>


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