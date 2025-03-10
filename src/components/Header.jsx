
import { Form, Link } from "react-router-dom"
import { FaBars } from "react-icons/fa"
import { useState } from "react"


const Header = () => {
    const [searchQuery, setSearchQuery] = useState("")
    return (
        <>
            <header>
                <Link to="/" className="site-logo">
                    <h1>MovieTerminal</h1>
                </Link>
                {/* todo: Implement search feature using react router */}
                <Form method="get" className="search-form">
                    <input type="text" placeholder="Search movies" name="search" value={searchQuery} onChange={e => {
                        setSearchQuery(e.target.value);
                    }} />
                    <button type="submit">
                        Search
                    </button>
                </Form>

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