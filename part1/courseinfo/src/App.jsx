const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  const Header = (props) => {
    return (
      <>
        <h1>{props.course}</h1>
      </>
    )
  }

  const Content = (props) => {
    const propMap = props.parts.map(value => <p key={value.name}>{value.name} {value.exercises}</p>)

    return (
      <>
        {propMap}
      </>
    )
  }

  const Total = (props) => {
    let propTotal = 0
    props.parts.forEach(value => {
      propTotal += value.exercises
    })

    return (
      <>
        <p>Number of exercises {propTotal}</p>
      </>
    )
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App