const Person = ({ addPerson }) => {
    return <p key={addPerson.key}>{addPerson.name} {addPerson.number}</p>
}

export default Person