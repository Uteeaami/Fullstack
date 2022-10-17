import { useState } from 'react'


const Button = (props) => {
  return(
      <button onClick={props.handleClick}>
      {props.text}
      </button>
  )
}

const Anecdote=(props)=>{
  return(
    <div>
      <h1>Anecdote of the day</h1>
      <p>{props.anecdotes[props.selected]}</p>
      <p>Points: {props.votes[props.selected]}</p>
    </div>
  )
}

const MaxAnecdote=(props)=>{

  return(
    <div>
      <h1>Most voted anecdote</h1>
      <p>{props.anecdotes[props.max]}</p>
      <p>Points: {props.votes[props.max]}</p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Uint8Array(7))
  
  const copy = [...votes]


  const getRandom = () => {
    let min=0
    let max=7
    min = Math.ceil(min)
    max = Math.floor(max)
    let asd=Math.floor(Math.random()*(max-min)+min)
    setSelected(asd)
  }

  const getPoint = () => {
    copy[selected] +=1
    setVotes(copy)
    console.log(votes)
  }

  const getMost = () => {
    const max = Math.max(...votes)
    const index = votes.indexOf(max);
    return index
  }


  return (  
    <div>
      <Anecdote anecdotes={anecdotes} selected={selected} votes={votes}/>
      <Button handleClick={getPoint}
      text='Vote'
      />
      <Button handleClick={getRandom}
      text='Next anecdote'
      />
      <MaxAnecdote anecdotes={anecdotes} votes={votes} max={getMost()}>MaxAnecdote</MaxAnecdote>
    </div>
  )
}

export default App