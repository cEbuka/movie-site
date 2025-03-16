import { Fragment, useState } from "react"
import { Form } from "react-router-dom"


const SearchBar = () => {
    const [search, setSearch] = useState('')
    return (
        <Fragment>
            <Form method="get" className="search-form">
                <input type="text" placeholder="Search movies" name="search" defaultValue={search} onChange={(e) => setSearch(e.target.value)} />
                <button type="submit">
                    Search
                </button>
            </Form>
        </Fragment>
    )
}

export default SearchBar