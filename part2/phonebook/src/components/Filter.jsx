import React from "react"


const Filter = ({filter,filterByName}) => {
    return (

        <div>filter shown with <input value={filter}
            onChange={filterByName} /></div>

    )
}

export default Filter