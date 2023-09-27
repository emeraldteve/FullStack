const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  const Header = (props) => {
    return (
      <>
        <h1>{props.course.name}</h1>
      </>
    )
  }

  const Content = (props) => {
    const propMap = props.parts.parts.map(value => <p key={value.name}>{value.name} {value.exercises}</p>)
    return (
      <>
        {propMap}
      </>
    )
  }

  const Total = (props) => {
    const propTotal = props.parts.parts.reduce((total, part) => total + part.exercises, 0);
    return (
      <>
        <p>Number of exercises {propTotal}</p>
      </>
    )
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={course} />
      <Total parts={course} />
    </div>
  )
}

export default App