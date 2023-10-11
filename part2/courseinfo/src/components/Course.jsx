import Content from './Content'
import Header from './Header'
import Total from './Total'

const Course = ({course}) => {
    const exercises = course.parts.map((x) => x.exercises)

    return (
        <>
            <Header header={course.name} />
            <Content content={course.parts} />
            <Total exercises={exercises} />
        </>
    )
}

export default Course