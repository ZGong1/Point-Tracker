const Header = ({setHome, setNewNinja}) => {

    const goNewNinja = () => {
        setHome(false)
        setNewNinja(true)
    }

    const goHome = () => {
        setHome(true)
        setNewNinja(false)
    }

    return ( 
        <div className="header">
            <button onClick={goHome}>Home</button>
            <button onClick={goNewNinja}>Add Ninja</button>
            <button>Save Backup</button>
            <button>Restore Backup</button>
        </div> 
    );
}
 
export default Header;