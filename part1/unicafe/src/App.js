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

const Statistics = (props) =>{
  let average = 0
  let positive = 0

  if(props.all===0){
    return(
      <div>
        <h2>Statistics</h2>
        <table>
          <tbody>
            <tr>
              <StatisticLine text="good" value={props.good}/>
            </tr>
            <tr>
              <StatisticLine text="neutral" value={props.neutral}/>
            </tr>
            <tr>
              <StatisticLine text="bad" value={props.bad}/>
            </tr>
            <tr>
              <td>No feedback given</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
  else{
    const calculateAverage = () => {
      average = props.good + (props.bad * -1)
      average = average/props.all
      return(average)
    }
    const calculatePositive = () => positive = props.good/props.all * 100
  
    return(
      <div>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <tr>
            <StatisticLine text="good" value={props.good}/>
          </tr>
          <tr>
            <StatisticLine text="neutral" value={props.neutral}/>
          </tr>
          <tr>
            <StatisticLine text="bad" value={props.bad}/>
          </tr>
          <tr>
            <StatisticLine text="all" value={props.all}/>
          </tr>
          <tr>
            <td>Average {calculateAverage()}</td>
          </tr>
          <tr>
            <td>Positive {calculatePositive()} %</td>
          </tr>
        </tbody>
      </table>
    </div>
    )
  }
}

const StatisticLine = (props) => {
  return(
    <td>{props.text} {props.value}</td>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

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
        <Statistics good = {good} bad={bad} all={all} neutral={neutral}/>
      </div>
    </div>
  )
}

export default App