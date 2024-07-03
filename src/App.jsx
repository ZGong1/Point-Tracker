import Ninja from './Ninja'
import Header from './Header'
import NewNinja from './NewNinja'
import { useState, useEffect } from 'react'
import list from './assets/test'

function App() {
  
  const [ninjaList, setNinjaList] = useState(null)
  const [home, setHome] = useState(true)
  const [newNinja, setNewNinja] = useState(false)

  // initial on page load get of static data
  useEffect(() => {
    const storedNinjas = localStorage.getItem("ninjas");
    if (storedNinjas) {
      setNinjaList(JSON.parse(storedNinjas));
    } else {
      localStorage.setItem("ninjas", JSON.stringify(ninjaList));
    }
  }, []);
  
  useEffect(() => {
    if (ninjaList) {
      localStorage.setItem("ninjas", JSON.stringify(ninjaList))
    }
  }, [ninjaList])




  return (
    <div>
      <Header setHome={setHome} setNewNinja={setNewNinja}/><br/><br/>

      {home && ninjaList && Object.keys(ninjaList).map( (item, idx) => <Ninja key={idx} name={item} value={ninjaList[item]} idx={idx} /> )}

      {newNinja && <NewNinja ninjaList={ninjaList} setNinjaList={setNinjaList}/>}


    </div>
  )
}

export default App
