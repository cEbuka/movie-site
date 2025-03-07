
import { Form, Link } from "react-router-dom"
import { FaFacebook } from "react-icons/fa"


const Header = () => {
    return (
        <>
            <header>
                <Link to="/" className="site-logo">
                 <h1>MovieTerminal</h1>
                </Link>

                <Form method="post" className="search-form">
                    <input type="text" placeholder="Search movies" name="search" />
                    <button type="submit">
                        Search
                    </button>
                </Form>

                <div className="sign-in">
                    <Link to={`/signup`} className="sign_in">Sign in
                    </Link>
                    <FaFacebook />
                </div>
            </header>
        </>
    )
}

export default Header