
const Country = ({country, showCountry}) =>{
    console.log(country)
    const single = country[0]
    const language = Object.values(country[0].languages)
    const map = Object.values(country[0].flags)[0]


    return(
        <div>
            <h1>{single.name.common}</h1>
            <p>{single.capital}</p>
            <p>{single.area}</p>
            <h3>Languages: </h3>
            <ul>
                {language.map(languages => 
                  <li>{languages}</li>
                )}
            </ul>
            <img src={map} alt="Should be a map here"/>
        </div>
    )
}

export default Country