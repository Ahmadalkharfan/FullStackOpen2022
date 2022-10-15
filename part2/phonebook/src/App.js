import { useState } from 'react'


const Person = ({ person }) => <div><b>{person.name}</b></div>

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()
    
    console.log(newName, "is newName")
    console.log(persons.filter(person => person.name === newName).length > 0)

    if (persons.filter(person => person.name === newName).length === 0) {
      const personObject = {
        name: newName,
      }
      setPersons(persons.concat(personObject))
      setNewName('')
    }
    else {
      alert(`${newName} is already added to phonebook`);
    }
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName}
            onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person =>
          <Person key={person.name} person={person} />
        )}
      </ul>
    </div>
  )
}

export default App