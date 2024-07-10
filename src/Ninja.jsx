import './ninja.css'
import imageList from './image'


const Ninja = ( {ninjaList, setNinjaList, name, value, idx} ) => {

  var imgNum = value.imgNum 

    const removeNinja = () => {
      console.log("value: ", value)
      console.log(imageList)
    }

    const iceCream = () => {
      // console.log("name: ", name)
      // console.log("ninjaList: ", ninjaList[name])

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

    return ( 
       <div className="outerNinja">
            <div className="innerLeft">
                <img className='image' src={imageList[imgNum]}/>
                <p className='ninjaName'>{name}</p>
            </div>
            <div className='ninjaData'>
              Ninja Bucks: {value.points} <br/><br/>
              Last Level Up: {value.llu}<br/>

              {value.ice && <p className='emoji'>🍦</p>}
              {!value.ice && <p className='emoji'>❌</p>}
              <div>
                <button>Level Up</button>
                <button>Belt Up</button>
                <button onClick={() => iceCream(name)}>Ice Cream</button>
              </div>
            </div>
        <button onClick={() => removeNinja(name)} className="removeButton">x</button>
       </div>
    );
}
 
export default Ninja;