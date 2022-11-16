import Country from './Country'
import React, { useState, useEffect } from 'react'

const Content = ({countries, newFilter}) => {
    const [singleCountry, newSingleCountry] = useState()

    const country = countries.filter(country =>
         country.name.common.toUpperCase().includes(newFilter.toUpperCase())
         )
    

    if(country.length > 10){
        return(
            <div>
                <p>Too many countries to show</p>
            </div>
        )
    }
    
    if(country.length === 1){
    
        return(
            <Country
                country={country}
            />
        )
    }

    if(singleCountry !== undefined){
        return(
            <Country
                country={singleCountry}
            />
        )
    }

    const showCountry = (event) => {
        console.log(event.target.value)
        const oneCountry = countries.filter(country => 
            country.name.common.includes(event.target.value)
            )
        console.log(oneCountry)
        newSingleCountry(oneCountry)
    }

    return(
        <div>
            <ul>
                {country
                .map(country => <li>{country.name.common} <button 
                    onClick={showCountry}
                    value={country.name.common}>
                    show
                    </button> </li>)
                }
            </ul>
        </div>
    )
}

export default Content