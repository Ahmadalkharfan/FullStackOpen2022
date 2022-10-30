import { useState } from 'react'


const Person = ({ person }) => <div><b>{person.name}</b> <b>{person.number}</b></div>

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      number: '040-1234567'
    }
  ])
  const [search, setSearch] = useState({
    filter: '',
    list: []
  })
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const addPerson = (event) => {
    event.preventDefault()

    console.log(newName, "is newName")
    console.log(newNumber, "is newNumber")
    console.log(persons.filter(person => person.name === newName).length > 0)

    if (persons.filter(person => person.name === newName).length === 0) {
      const personObject = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
    else {
      alert(`${newName} is already added to phonebook`);
    }
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)

    const results = persons.filter(person => {
      if (event.target.value === "") return persons
      return person.name.toLowerCase().includes(event.target.value.toLowerCase())
    })
    setSearch({
      query: event.target.value,
      list: results
    })
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>filter shown with <input value={newFilter}
        onChange={handleFilterChange} /></div>
      <h2>Add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName}
            onChange={handleNameChange} />
        </div>
        <div>number: <input value={newNumber}
          onChange={handleNumberChange} /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {search.query === '' ?
          persons.map(person =>
            <Person key={person.name} person={person} />
          ) //if the query is not empty
          : search.list.map(person =>
            <Person key={person.name} person={person} />
          )}
      </ul>
    </div>
  )
}

export default App