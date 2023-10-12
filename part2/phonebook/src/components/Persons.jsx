import Person from './Person'

const Persons = ({ persons, searchFilter }) => {
  return (
    <>
      {searchFilter.map(person => (
        <Person key={person.name} addPerson={person} />
      ))}
    </>
  )
}

export default Persons