const Header = ({setHome, setNewNinja, setSearchString, searchString}) => {

    const goNewNinja = () => {
        setHome(false)
        setNewNinja(true)
    }

    const goHome = () => {
        setHome(true)
        setNewNinja(false)
    }

    const handleSearch = e => {
        setSearchString(e.target.value)
    }

    return ( 
        <div className="header">
            <button onClick={goHome}>Home</button>
            <button onClick={goNewNinja}>Add Ninja</button>
            <button>Save Backup</button>
            <button>Restore Backup</button>
            Search: <input value={searchString} onChange={handleSearch}></input>
        </div> 
    );
}
 
export default Header;