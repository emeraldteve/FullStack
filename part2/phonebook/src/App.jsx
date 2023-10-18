console.clear()

import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const addContact = (event) => {
    event.preventDefault()

    const contact = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }

    const duplicateCheck =
      persons.filter((x) => x.name.toLowerCase() === contact.name.toLowerCase()).length > 0

    duplicateCheck || newName.length === 0
      ? newName.length === 0
        ? alert('Please enter a name.')
        : alert(`${newName} is already added to the phonebook`)
      : (setPersons(persons.concat(contact)), setNewName(''), setNewNumber(''))
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    setNewSearch(event.target.value)
  }

  const searchFilter = newSearch
    ? persons.filter((x) => x.name.toLowerCase().includes(newSearch.toLowerCase()))
    : persons

  return (
    <>
      <h2>Phonebook</h2>
      <Filter newSearch={newSearch} handleSearchChange={handleSearchChange} />

      <h3>Add a new</h3>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        addContact={addContact}
      />

      <h3>Numbers</h3>
      <Persons persons={persons} searchFilter={searchFilter} newSearch={newSearch} />
    </>
  )
}

export default App