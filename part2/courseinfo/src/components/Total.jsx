const Total = ({exercises}) => {
    const total = exercises.reduce((sum, i) => {return sum + i}, 0)

    return (
        <>
            <b><p>total of {total} exercises</p></b>
        </>
    )
}

export default Total