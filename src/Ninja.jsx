import './ninja.css'
import imageList from './image'


const Ninja = ( {name, value, idx, imgNum} ) => {

    const removeNinja = item => {
      console.log("value: ", value)
      console.log(imageList)
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
                <button>Ice Cream</button>
              </div>
            </div>
        <button onClick={() => removeNinja(name)} className="removeButton">x</button>
       </div>
    );
}
 
export default Ninja;