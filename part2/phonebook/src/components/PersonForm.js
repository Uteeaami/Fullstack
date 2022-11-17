const PersonForm = (props) =>{
    return(
      <form onSubmit={props.addPerson}>
          <div>
            Name: <input className="upperbox"
            onChange ={props.handleNameChange}
            value = {props.newName}
            />
          </div>
          <div>
            Number: <input className="lowerbox"
            onChange ={props.handleNumberChange}
            value = {props.newNumber}
            />
          </div>
          <div>
            <button className="add" type="submit">Add</button>
          </div>
        </form>
    )
  }

  export default PersonForm