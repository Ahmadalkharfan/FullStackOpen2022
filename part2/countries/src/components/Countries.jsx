import React from "react"

const Countries = ({search,persons}) => {
    return (
        <>
            <ul>
                {search.query === '' ?
                    persons.map(person =>
                        <div key={person.name}><b>{person.name}</b> <b>{person.number}</b></div>
                    ) //if the query is not empty
                    : search.list.map(person =>
                        <div key={person.name}><b>{person.name}</b> <b>{person.number}</b></div>
                    )}
            </ul>
        </>
    )
}

export default Countries