
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa"
import SearchBar from "./SearchBar";


const Header = () => {
    return (
        <>
            <header>
                <Link to="/" className="site-logo">
                    <h1>MovieTerminal</h1>
                </Link>
                <SearchBar />

                <div className="sign-in">
                    <Link to={`/signup`} className="sign_in">
                        <h3>Sign in</h3>
                    </Link>
                    <button><FaBars /></button>
                </div>

            </header>
        </>
    )
}

export default Header