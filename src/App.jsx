import Ninja from './Ninja'
import { useState, useEffect } from 'react'
import list from './assets/test'

function App() {
  
  const [ninjaList, setNinjaList] = useState({})

  // initial on page load get of static data
  useEffect(() => {
    setNinjaList(JSON.parse(localStorage.getItem("ninjas")))
  }, [])
  
  useEffect(() => {
    localStorage.setItem("ninjas", JSON.stringify(ninjaList))
  }, [ninjaList])




  return (
    <div>
      

      {Object.keys(ninjaList).map( (item, idx) => <Ninja key={idx} name={item} value={ninjaList[item]} idx={idx} /> )}
    </div>
  )
}

export default App
