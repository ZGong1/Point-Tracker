import Ninja from './Ninja'
import Header from './Header'
import { useState, useEffect } from 'react'
import list from './assets/test'

function App() {
  
  const [ninjaList, setNinjaList] = useState(null)

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
      console.log("running")
    }
  }, [ninjaList])




  return (
    <div>
      <Header/><br/><br/>

      {ninjaList && Object.keys(ninjaList).map( (item, idx) => <Ninja key={idx} name={item} value={ninjaList[item]} idx={idx} /> )}
    </div>
  )
}

export default App
