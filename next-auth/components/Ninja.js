"use client"

const Ninja = ( { data } ) => {
  const {belt, bucks, id, imgNum, llu, name, ice} = data
  return (
    <div className="outerNinja">

      <div className={`innerLeft ${belt}`}>
        <img className='image' src={`icons/IconSquare${imgNum}.png`}/>
        <p className='ninjaName'>{name}</p>
      </div>

      <div className='ninjaData'>

        <p>Ninja Bucks: {bucks}</p> <br/>

        Last Level Up: {llu}<br/>

        {ice && <p className='emoji'>🍦</p>}
        {!ice && <p className='emoji'>❌</p>}

        <div>
          <button className='ninja-button' >Level Up</button>
          <button className='ninja-button' >Belt Up</button>
          <button className='ninja-button' >Belt Down</button>
          <button className='ninja-button' >Ice Cream</button>
        </div>

      </div>

      <div>
        <button className="editButton">✏️</button>
        <button className="editButton">❌</button>
      </div>

    </div>
  );
}
 
export default Ninja;