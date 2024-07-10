import Ninja from './Ninja'
import Header from './Header'
import NewNinja from './NewNinja'
import { useState, useEffect } from 'react'
import list from './assets/test'

function App() {
  
  const [ninjaList, setNinjaList] = useState(null)
  const [home, setHome] = useState(true)
  const [newNinja, setNewNinja] = useState(false)
  const [searchString, setSearchString] = useState('')
  
  var searchList =  ninjaList
  if (ninjaList) {
    searchList = Object.entries(ninjaList).filter( ([key, value]) => key.toUpperCase().includes(searchString.toUpperCase()) )
  }

  // initial on page load get of static data
  useEffect(() => {
    const storedNinjas = localStorage.getItem("ninjas");
    if (storedNinjas) {
      setNinjaList(JSON.parse(storedNinjas));
    } else {
      localStorage.setItem("ninjas", JSON.stringify(ninjaList));
    }
  }, []);
  
  // update local storage if new ninja is added
  useEffect(() => {
    if (ninjaList) {
      localStorage.setItem("ninjas", JSON.stringify(ninjaList))
    }
  }, [ninjaList])


  return (
    <div>
      <Header setHome={setHome} setNewNinja={setNewNinja} setSearchString={setSearchString} searchString={searchString}/><br/><br/>

      {home && searchList && searchList.map( (item, idx) => <Ninja key={idx} ninjaList={ninjaList} setNinjaList={setNinjaList} name={item[0]} value={item[1]} idx={idx} imgNum={Math.floor(Math.random() * 2) }/> )}

      {newNinja && <NewNinja ninjaList={ninjaList} setNinjaList={setNinjaList}/>}


    </div>
  )
}

export default App
