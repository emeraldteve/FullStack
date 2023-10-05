console.clear()

import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const StatisticLine = (props) => (
  <p>{props.text} {props.value}</p>
)

const Statistics = (props) => {
  const total = props.good + props.neutral + props.bad
  const average = total/3
  const positive = props.good/total

  if (total === 0) {
    return (<p>No feedback given</p>)
  } else {
    return (
      <>
        <StatisticLine text="good" value={props.good} />
        <StatisticLine text="neutral" value={props.neutral} />
        <StatisticLine text="bad" value={props.bad} />
        <StatisticLine text="all" value={total} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={positive} />
      </>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const isGood = addGood => {
    console.log("good:", addGood)
    setGood(addGood)
  }

  const isNeutral = addNeutral => {
    console.log("neutral:", addNeutral)
    setNeutral(addNeutral)
  }

  const isBad = addBad => {
    console.log("bad:", addBad)
    setBad(addBad)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => isGood(good + 1)} text="good" />
      <Button handleClick={() => isNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => isBad(bad + 1)} text="bad" />

      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App