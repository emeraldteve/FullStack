const PersonForm = ({ newName, newNumber, handleNameChange, handleNumberChange, addContact }) => {
    return (
        <>
            <form onSubmit={addContact}>
                name: <input value={newName} onChange={handleNameChange} /> <br />
                number: <input value={newNumber} onChange={handleNumberChange} /> <br />
                <button type="submit">add</button>
            </form>
        </>
    )
}

export default PersonForm