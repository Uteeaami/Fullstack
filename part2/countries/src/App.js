import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Content from './components/Content'
import Filter from './components/Filter'

const App = () => {
  const [allCountries, setAllCountries] = useState([])
  const [newFilter, setNewFilter] = useState('')


  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled')
        setAllCountries(response.data)
      })
  }, [])

  const handleFilterChange = (event) => {
    console.log(newFilter)
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <Filter handleFilterChange={handleFilterChange} newFilter={newFilter}/>
      <Content countries={allCountries} newFilter={newFilter}/>
    </div>
  )
}

export default App