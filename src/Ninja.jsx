import './ninja.css'
import imageList from './image'


const Ninja = ( {ninjaList, setNinjaList, name, value} ) => {

  var imgNum = value.imgNum 

    const removeNinja = () => {
      console.log("value: ", value)
      console.log(imageList)
    }

    const iceCream = () => {

      if (ninjaList[name].ice && ninjaList[name].points >= 10) {
        alert("Ice cream redeemed!")
        const toEdit = {...ninjaList}
        const newPoints = toEdit[name].points - 10
        toEdit[name] = {...toEdit[name], ice: false, points: newPoints}
        console.log("toEdit[name]: ", toEdit[name])
        setNinjaList(toEdit)
      } else {
        alert("You already got ice cream this month or don't have enough ninja bucks.")
      }

    }

    const levelUp = () => {
      var date = new Date();
      const mm = String(date.getMonth() + 1).padStart(2, '0');
      const dd = String(date.getDate()).padStart(2, '0');
      const yyyy = date.getFullYear();
      date = `${mm}/${dd}/${yyyy}`;

      const toEdit = {...ninjaList}
      const newPoints = toEdit[name].points + 5
      toEdit[name] = {...toEdit[name], points: newPoints, llu: date}

      setNinjaList(toEdit)
      alert(`${name} has leveled up!`)
    }

    return ( 
       <div className="outerNinja">
            <div className="innerLeft">
                <img className='image' src={imageList[imgNum]}/>
                <p className='ninjaName'>{name}</p>
            </div>
            <div className='ninjaData'>
              <p>Ninja Bucks: {value.points}</p>
              Last Level Up: {value.llu}<br/>

              {value.ice && <p className='emoji'>🍦</p>}
              {!value.ice && <p className='emoji'>❌</p>}
              <div>
                <button onClick={levelUp}>Level Up</button>
                <button>Belt Up</button>
                <button onClick={() => iceCream(name)}>Ice Cream</button>
              </div>
            </div>
        <button onClick={() => removeNinja(name)} className="removeButton">x</button>
       </div>
    );
}
 
export default Ninja;