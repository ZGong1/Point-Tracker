import './ninja.css'


const Ninja = ( {name, value, idx} ) => {

    const removeNinja = item => {
      console.log(item)
    }

    return ( 
       <div className="outerNinja">
            <div className="innerLeft">
                <p className='ninjaName'>{name}</p>
            </div>
            <div className='ninjaData'>
              <p>test</p> <br/>
              <p>test2</p>
            </div>
        <button onClick={() => removeNinja(name)} className="removeButton">x</button>
       </div>
    );
}
 
export default Ninja;