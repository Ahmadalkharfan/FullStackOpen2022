import { useState, useEffect } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import Notification from './components/Notification';
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
  const [message, setMessage] = useState(null)

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
          setMessage(
            `Added ${personObject.name}`
          )
        })
    }
    else if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
      const person = persons.find(p => p.name === newName)
      const changedPerson = { ...person, number: newNumber }
      const id = person.id

      personService
        .update(person.id, changedPerson)
        .then(returnedPerson => {
          setPersons(persons.map(person => person.id !== id ? person : returnedPerson))
        })
        .catch(error => {
          alert(
            `the note '${person.name}' was already deleted from server`
          )
        })
          setPersons(persons.filter(p => p.id !== id))
          setMessage(
            `Updated ${person.name}`
          )
          setNewName('')
          setNewNumber('')
        
    }
  }


  const deletePerson = (id) => {

    personService
      .deletePerson(id)
      .then(returnedPerson => {
        setPersons(persons.filter(person => id !== person.id))
      })
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
      <Notification message={message} />
      <Filter filter={newFilter} filterByName={handleFilterChange} />
      <h2>Add a new</h2>
      <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Persons search={search} persons={persons} deletePerson={deletePerson} />
    </div>
  )
}

export default App