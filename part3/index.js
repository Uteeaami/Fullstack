require('dotenv').config()
const express = require('express')
const app = express()
app.use(express.json())
app.use(express.static('build'))

const cors = require('cors')
app.use(cors())

const Person = require('./models/person')

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Martti Tienari",
    number: "040-123456",
  },
  {
    id: 3,
    name: "Arto Järvinen",
    number: "040-123456",
  },
  {
    id: 4,
    name: "Lea Kutvonen",
    number: "040-123456",
  }
]

app.get('/api/persons', (request, response) => {
  Person.find({}).then(persons => {
    response.json(persons)
  })
})

app.get('/api/persons/:id', (request, response) => {
  Person.findById(request.params.id).then(person => {
    response.json(person)
  })
  })

//DELETE
app.delete('/api/persons/:id', (request, response) => {
  Person.findByIdAndRemove(request.params.id)
  .then(result => {
    response.status(204).end()
  })
  .catch(error => next(error))
  })

  const generateId = () => {
    const rndNmbr = Math.floor(Math.random() * 2147483647) + 1
    return rndNmbr
  }
  
  //POST
  app.post('/api/persons', (request, response) => {
    const body = request.body
    const personsArray = persons.map(p => p.name)
  
    if (!body.name) {
         return response.status(400).json({ error: 'Name is missing'})
    }else if(!body.number){
        return response.status(400).json({ error: 'Number is missing'})
    }
    
    const person = new Person({
      name: body.name,
      number: body.number,
      id: generateId(),
    })
    
    if(personsArray.includes(person.name)){
        return response.status(400).json({ error: 'This persons information is already submitted'})
    }

    person.save().then(savedPerson => {
      response.json(savedPerson)
    })
  })

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
