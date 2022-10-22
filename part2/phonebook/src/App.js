import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      phone: '040-12312334' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')


  const addPerson = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      phone: newNumber,
    }

    persons.forEach((listed) => {
      if(newName === listed.name){
        alert(`${newName} is already added to phonebook`)
      }
      else{
        setPersons(persons.concat(nameObject))
        setNewName('')
        setNewNumber('')
      }
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


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
          value = {newName}
          onChange={handleNameChange}
          />
        </div>
        <div>
          number: <input
          value = {newNumber}
          onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => <li>{person.name} {person.phone}</li>)}
      </ul>
    </div>
  )

}

export default App