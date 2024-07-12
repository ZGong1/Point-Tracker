const Header = ( { setHome, setNewNinja, setSearchString, searchString, authorized, setAuthorized } ) => {

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

    const lockButton = () => {
        if (authorized) {
            // deauthorize
            setAuthorized(!authorized)
        } else {
            //authorize
            var pwdInput = prompt("Please enter the password")
            if (pwdInput === "Sensei24") {
                setAuthorized(!authorized)
            } else {
                alert("WRONG PASSWORD")
            }
        }
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

            <div className="left-buttons">
                <button onClick={goHome}>Home</button>
                <button onClick={goNewNinja}>Add Ninja</button>
                <button onClick={download}>Save Backup</button>
                <button>Restore Backup</button>
                <span className="vertical">Search:</span> <input value={searchString} onChange={handleSearch}></input>
            </div>
            <div className="right-buttons">
                {authorized && <button onClick={lockButton}>🔓</button>}
                {!authorized && <button onClick={lockButton}>🔒</button>}
            </div>
        </div> 
    );
}
 
export default Header;