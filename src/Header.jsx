const Header = ( { setHome, setNewNinja, setSearchString, searchString } ) => {

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

    // stack overflow to download file
    const download = () => {
        // create data to save
        const text = localStorage.getItem("ninjas") + "|" + localStorage.getItem("lir")

        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', "backup.json");
        
        element.style.display = 'none';
        document.body.appendChild(element);
        
        element.click();
        
        document.body.removeChild(element);
    }


    return ( 
        <div className="header">
            <button onClick={goHome}>Home</button>
            <button onClick={goNewNinja}>Add Ninja</button>
            <button onClick={download}>Save Backup</button>
            <button>Restore Backup</button>
            Search: <input value={searchString} onChange={handleSearch}></input>
        </div> 
    );
}
 
export default Header;