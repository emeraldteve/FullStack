const Filter = ({ newSearch, handleSearchChange }) => {
    return (
        <>
            filter shown with <input value={newSearch} onChange={handleSearchChange} />
        </>
    )
}

export default Filter