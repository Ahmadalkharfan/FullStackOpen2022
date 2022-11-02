import { useState, useEffect } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [search, setSearch] = useState({
    query: '',
    list: []
  })
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

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

        personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        })
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
      <Filter filter={newFilter} filterByName={handleFilterChange} />
      <h2>Add a new</h2>
      <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Persons search={search} persons={persons} />
    </div>
  )
}

export default App