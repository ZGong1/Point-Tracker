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

      if (ninjaList[name].ice) {
        alert("Ice cream redeemed!")
        const toEdit = {...ninjaList}
        toEdit[name] = {...toEdit[name], ice: false}
        console.log("toEdit[name]: ", toEdit[name])
        setNinjaList(toEdit)
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