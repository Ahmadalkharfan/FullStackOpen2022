import React from "react"

const Persons = ({search,persons,deletePerson}) => {
    return (
        <>
            <ul>
                {search.query === '' ?
                    persons.map(person =>
                        <div key={person.name}>
                            <b>{person.name}</b> <b>{person.number}</b> <button onClick={() => {if(window.confirm(`Delete ${person.name}?`))deletePerson(person.id)}}>delete</button>
                        </div>
                    ) //if the query is not empty
                    : search.list.map(person =>
                        <div key={person.name}><b>{person.name}</b> <b>{person.number}</b></div>
                    )}
            </ul>
        </>
    )
}

export default Persons