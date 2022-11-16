

const Filter = ({handleFilterChange, newFilter}) => {


    return(
        <form>
            Search for a country: <input
            onChange={handleFilterChange}
            />
        </form>
    )
}

export default Filter