import { useState } from 'react'

const Header = () => {
  return(
    <h1>Give feedback</h1>
  )
}

const Button = ({handleClick, text}) =>{
  return(
    <button onClick={handleClick}>
    {text}
    </button>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  let average = 0
  let positive = 0

  const increaseGood = () => {
    setGood(good +1) 
    setAll(all + 1)
  }
  const increaseNeutral = () => {
    setNeutral(neutral +1) 
    setAll(all +1)
  }

  const increaseBad = () => {
    setBad(bad +1)
    setAll(all +1)
  }

  const calculateAverage = () => {
    average = good + (bad * -1)
    average = average/all
    return(average)
  }
  
  const calculatePositive = () => positive = good/all * 100


  return (
    <div>
      <Header/>
      <div>
        <Button handleClick={increaseGood}
        text='Good'
        />
        <Button handleClick={increaseNeutral}
        text='Neutral'
        />
        <Button handleClick={increaseBad}
        text='Bad'
        />
      </div>
      <div>
        <h2>Statistics</h2>
        <p>Good {good}</p>
        <p>Neutral {neutral}</p>
        <p>Bad {bad}</p>
        <p>All {all}</p>
        <p>Average {calculateAverage()}</p>
        <p>Positive {calculatePositive()}</p>
      </div>
    </div>
  )
}

export default App