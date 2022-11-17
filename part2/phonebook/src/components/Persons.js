

const Person = ({persons, searchName, handleClick}) => {

    return(
      <div>
        <ul>
        {persons.filter(person=>
          person.name.toLowerCase().includes(searchName)
          )
          .map(person => 
            <li className="info" key={person.id}>
            {person.name} {person.number}
            <button className="delete" 
              onClick={() => handleClick(person.id)}>
              delete
            </button> 
            </li>)}
        </ul>
      </div>
    )
  }

  export default Person