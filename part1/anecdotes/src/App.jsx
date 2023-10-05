import { useState } from 'react'

const NextAnecdote = (props) => {
  return (<button onClick={props.rollForAnecdote}>{props.text}</button>)
}

const Quote = (props) => {
  return (
    <>
      <h1>Anecdote of the day</h1>
      <p>{props.anecdoteCollection[props.selected]}</p>
      <p>has {props.votes} votes</p>
    </>
  )
}

const MostPopularQuote = (props) => {
  const numbers = [...props.votes]
  const sum = numbers.reduce((add, current) => add + current, 0)
  const highestVote = Math.max(...numbers)
  const quoteIndex = numbers.indexOf(highestVote)

  if (sum !== 0) {
    return (
      <>
        <h1>Anecdote with most votes</h1>
        <p>{props.anecdoteCollection[quoteIndex]}</p>
        <p>has {highestVote} votes</p>
      </>
    )
  }
}

const Upvote = (props) => {
  return (<button onClick={props.upvote}>{props.text}</button>)
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))
  const copy = [...points]

  const generateRandomNumber = (props) => {
    let randomNumber

    do {
      randomNumber = Math.floor(Math.random() * props.length)
    } while (randomNumber === selected)

    setSelected(randomNumber)
  }

  const updateVotes = () => {
    copy[selected] += 1
    setPoints(copy)
  }

  return (
    <div>
      <Quote anecdoteCollection={anecdotes} selected={selected} votes={points[selected]} />
      <Upvote upvote={updateVotes} text="vote" />
      <NextAnecdote rollForAnecdote={() => generateRandomNumber(anecdotes)} text="next anecdote" />
      <MostPopularQuote anecdoteCollection={anecdotes} votes={points} />
    </div>
  )
}

export default App