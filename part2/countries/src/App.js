import { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './components/Countries'
import Search from './components/Search'


const App = () => {
  const [countries, setCountries] = useState([])
  const [countriesToShow, setCountriesToShow] = useState([])
  const [query, setQuery] = useState('');
  const [persons, setPersons] = useState([])

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleQueryChange = (event) => {
    console.log(event.target.value)
    setQuery(event.target.value)
    setCountriesToShow(countries.filter(country =>
      country.name.common.toLowerCase().includes(event.target.value.toLowerCase())
    ))
  }

  return (
    <div>
      <div>
        <Search query={query} filterByName={handleQueryChange} />
      </div>
      <div>
        <Countries countries={countriesToShow} persons={persons} />
      </div>
    </div>
  )
}

export default App