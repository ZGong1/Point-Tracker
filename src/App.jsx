import Ninja from './Ninja'
import Header from './Header'
import NewNinja from './NewNinja'
import Notification from './Notification'
import Log from './Log'
import { useState, useEffect } from 'react'
import MMYY from './utils/util'
import sortObjectAlphabetically from './utils/sortObject'
import setNotification from './utils/notification'

function App() {
  
  const [home, setHome] = useState(true)
  const [newNinja, setNewNinja] = useState(false)
  const [isLog, setIsLog] = useState(false)

  const [ninjaList, setNinjaList] = useState(null)
  const [searchString, setSearchString] = useState('')
  // CHANGE THIS BACK TO FALSE AFTER TESTING
  const [authorized, setAuthorized] = useState(true)
  const [alert, setAlert] = useState(null)
  
  // searches by search string
  var searchList =  ninjaList
  const toFilter = {...ninjaList}
  if (ninjaList) {
    searchList = Object.entries(sortObjectAlphabetically(toFilter)).filter( ([key, value]) => key.toUpperCase().includes(searchString.toUpperCase()) )
  }

  // initial on page load get of static data
  useEffect(() => {
    // load ninjaList
    var storedNinjas = localStorage.getItem("ninjas");
    if (storedNinjas) {
      storedNinjas = sortObjectAlphabetically(JSON.parse(storedNinjas))
      setNinjaList(storedNinjas);
    } else {
      localStorage.setItem("ninjas", JSON.stringify(ninjaList));
    }

    // load (l)ast (i)cecream (r)eset
    const lir = localStorage.getItem("lir")
    if (lir) {
      if (lir !== MMYY()) {
        var toEdit = {...JSON.parse(storedNinjas)}
        Object.keys(toEdit).forEach(item => toEdit[item].ice = true)
        setNinjaList(toEdit)
        localStorage.setItem("ninjas", JSON.stringify(toEdit))
        localStorage.setItem("lir", MMYY())
        alert("Ice cream has been reset for the month")
      }
    } else {
      localStorage.setItem("lir", MMYY())
    }
  }, []);
  
  // update local storage if new ninja is added
  useEffect(() => {
    if (ninjaList) {
      const sorted = sortObjectAlphabetically(ninjaList)
      localStorage.setItem("ninjas", JSON.stringify(sorted))
    }
  }, [ninjaList])

  //test return

  return (
    <div>

      <Header 
        setHome={setHome} 
        setNewNinja={setNewNinja} 
        setIsLog={setIsLog}
        setSearchString={setSearchString} 
        searchString={searchString} 
        authorized={authorized} 
        setAuthorized={setAuthorized}/><br/><br/>

      <Notification alert={alert}/>

      {home && searchList && searchList.map( (item, idx) => 
        <Ninja 
        key={idx} 
        ninjaList={ninjaList} 
        setNinjaList={setNinjaList} 
        name={item[0]} 
        value={item[1]} 
        authorized={authorized}
        setAlert={setAlert}/> )}

      {newNinja && 
        <NewNinja 
        ninjaList={ninjaList} 
        setNinjaList={setNinjaList}/> }

      {isLog && <Log/>}


    </div>
  )
}

export default App