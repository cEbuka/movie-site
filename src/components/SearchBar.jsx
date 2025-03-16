import { Fragment, useState } from "react"
import { Form } from "react-router-dom"


const SearchBar = () => {
    const [query, setQuery] = useState()
    const handleChange = (value) => {
        searchQuery(value)
        setQuery(value)
    }
    return (
        <Fragment>
            <Form className="search-form">
                <input type="text" placeholder="Search movies" name="search" defaultValue={query} onChange={(e) => handleChange(e.target.value)} />
                <button type="submit">
                    Search
                </button>
            </Form>
        </Fragment>
    )
}

export default SearchBar