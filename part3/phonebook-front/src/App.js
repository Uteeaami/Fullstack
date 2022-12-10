import { useState, useEffect } from 'react'
import axios from 'axios'
import Person from './components/Person'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  //Alkutilan haku
  useEffect(() => {
    console.log('effect')
    axios
      .get('/api/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  
  //Henkilön lisäys
  const addPerson = (event) => { 
    event.preventDefault()
    const personsArray = persons.map(event => event.name)
    const personObject = {
      name: newName,
      number: newNumber,
    }

    if(personsArray.includes(`${personObject.name}`)){
        window.alert("This duud's in here")
    }
    else{
        axios
          .post('/api/persons', personObject)
          .then(response => {
            setPersons(persons.concat(response.data))
            setNewName('')
            setNewNumber('')
    })
    }
  }

  //Poisto
  const remove = (id) =>{
    return axios.delete(`/api/persons/${id}`)
  }

  //Henkilön poiston varmistus ja sivun päivitys
  const deletePerson = id => {
    if(window.confirm('Delete this boyo?')){
      remove(id).then(() => axios
      .get('/api/persons')
      .then(response => {
        console.log('removed')
        setPersons(response.data)
      }))
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

  return (
    <div>
      <h1>Puhelinluettelo</h1>  
      <form onSubmit={addPerson}>
        <div>
        Nimi:
        <input
          value={newName}
          onChange={handleNameChange}
        />
        </div>
        <div>
        Numero:
        <input
          value={newNumber}
          onChange={handleNumberChange}
        />
        </div>
        <button type="submit">Tallenna</button>
      </form>
      {persons.map(person => <Person key={person.name} person={person} deletePerson={deletePerson}/>)}
    </div>
  )
}

export default App