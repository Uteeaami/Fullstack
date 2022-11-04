import { useEffect, useState } from 'react'

const Persons = ({persons, searchName}) => {
  return(
    <div>
      <ul>
      {persons.filter(person=>person.name.toLowerCase().includes(searchName))
      .map(person => <li>{person.name} {person.number}</li>)}
      </ul>
    </div>
  )
}

const PersonForm = (props) =>{

  const addPerson = (event) => {
    event.preventDefault()
    const nameObject = {
      name: props.newName,
      number: props.newNumber,
    }
    
    const checkDupe = props.persons.some((value)=>{
      if(value.name.toLowerCase() === nameObject.name.toLowerCase()){
        alert(`${props.newName} is already added to phonebook`)
          props.setNewName('')
          return true;
      }else{
        return false
      }
    })

    if(!checkDupe){
      props.setPersons(props.persons.concat(nameObject))
      props.setNewName('')
      props.setNewNumber('')
    }

  }
  return(
    <form onSubmit={addPerson}>
        <div>
          name: <input
          onChange ={props.handleNameChange}
          value1 = {props.newName}
          />
        </div>
        <div>
          number: <input
          onChange ={props.handleNumberChange}
          value1 = {props.newNumber}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

const Filter = ({handleSearchChange, searchName}) => {
  return(
    <div>
      Search for a person: 
      <input
      onChange={handleSearchChange}
      value={searchName}
      />
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName, setSearchName] = useState('')
 

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
        <Filter handleSearchChange={handleSearchChange} searchName={searchName}/>
      <h2>Add a new</h2>
        <PersonForm newName={newName} newNumber={newNumber} persons={persons} setPersons={setPersons} setNewName={setNewName} setNewNumber={setNewNumber}
          handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}
        />
      <h2>Numbers</h2>
        <Persons persons={persons} searchName={searchName}/>
      </div>
  )

}

export default App