import './ninja.css'


const Ninja = ( {name, value, idx} ) => {

    const removeNinja = item => {
      console.log("value: ", value)
    }

    return ( 
       <div className="outerNinja">
            <div className="innerLeft">
                <p className='ninjaName'>{name}</p>
            </div>
            <div className='ninjaData'>
              <p>Ninja Bucks: {value.points}</p>

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