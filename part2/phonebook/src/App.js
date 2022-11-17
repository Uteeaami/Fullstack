import { useEffect, useState } from 'react'

import personService from './services/person'
import Person from './components/Persons'
import Filter from './components/Filter'
import Notification from './components/Notification'
import PersonForm from './components/PersonForm'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName, setSearchName] = useState('')
  const [notification, setNotification] = useState(null)
 
 useEffect(() => {
  personService
    .getAll()
    .then(initialPersons => {
      setPersons(initialPersons)
    })
 }, [])

 const addPerson = (event) => {
  event.preventDefault()
  const personObject = {
    name: newName,
    number: newNumber,
  }
  
  
  const checkDupe = persons.some(value=>{
    if(value.name.toLowerCase() === personObject.name.toLowerCase()){
      if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
        const personAdd = persons.find(person => person.name === personObject.name)
        const pId = personAdd.id
      
        personService
          .update(pId,personObject)
          .then(updatedPerson => {
            setPersons(persons.map(person => person.id !== personAdd.id ? person : updatedPerson))
            setNewName('')
            setNewNumber('')

            setNotification(`${newName} number was updated`)
              setTimeout(() => {
                setNotification(null)
              }, 2500)
          })

        return true
      }else{
          setNewName('')
          setNewNumber('')
          return true;
      }
    }else{
      return false
    }
  })

  if(!checkDupe){
    personService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
        setNotification(`${newName} was added`)
            setTimeout(() => {
              setNotification(null)
            }, 2500)
      })
  }

}

const handleRemoveClick = (id) => {
  console.log(`Button ${id} Clicked`)
  const person = persons.find(person => person.id === id)
  const pname = person.name
  const pId = person.id
  
  if(window.confirm(`Delete ${pname}?`)){
    personService
      .remove(id)
    console.log(`${pname} deleted`)
    setPersons(persons.filter(person => person.id !== pId))

    setNotification(`${pname} was deleted successfully`)
      setTimeout(() => {
        setNotification(null)
      }, 2500)
    
  }
}

  const handleSearchChange = (event) => {
    setSearchName(event.target.value)
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
      <h2><Notification message={notification}/></h2>
        <Filter 
          handleSearchChange={handleSearchChange} 
          searchName={searchName}/>
      <h2>Add a new contact</h2>
        <PersonForm 
          addPerson={addPerson} 
          newName={newName} 
          newNumber={newNumber}
          handleNameChange={handleNameChange} 
          handleNumberChange={handleNumberChange}
        />
      <h2>Numbers</h2>
          <Person
              persons={persons}
              searchName={searchName}
              handleClick = {handleRemoveClick}
            />
    </div>
  )

}

export default App