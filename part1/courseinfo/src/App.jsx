const App = () => {
  const course = 'Half Stack Application Development'
  const Header = (props) => {
    return (
      <>
        <h1>{props.course}</h1>
      </>
    )
  }

  const part1 = 'Fundamentals of React'
  const part2 = 'Using props to pass data'
  const part3 = 'State of a component'
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14
  const Part = (props) => {
    return (
      <>
        <p>{props.part} {props.exercise}</p>
      </>
    )
  }

  const Total = (props) => {
    return (
      <>
        <p>Number of exercises {props.total}</p>
      </>
    )
  }

  return (
    <div>
      <Header course={course} />
      <Part part={part1} exercise={exercises1} />
      <Part part={part2} exercise={exercises2} />
      <Part part={part3} exercise={exercises3} />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App