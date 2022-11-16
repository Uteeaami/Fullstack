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

  export default Filter