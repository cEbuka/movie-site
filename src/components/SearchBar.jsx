import { Fragment, useState } from "react"
import { Form, useNavigate } from "react-router-dom"


const SearchBar = () => {
    const [search, setSearch] = useState('')
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        if (search.trim()) {
            navigate(`/results?search=${encodeURIComponent(search)}`);
        }

    }
    return (
        <Fragment>
            <Form className="search-form" onSubmit={handleSubmit}>
                <input type="text" placeholder="Search movies" name="search" defaultValue={search} onChange={(e) => setSearch(e.target.value)} />
                <button type="submit">
                    Search
                </button>
            </Form>
        </Fragment>
    )
}

export default SearchBar