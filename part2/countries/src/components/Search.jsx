import React from "react"

const Search = ({query,filterByName}) => {
    return (

        <div>find countries <input value={query}
            onChange={filterByName} /></div>

    )
}

export default Search