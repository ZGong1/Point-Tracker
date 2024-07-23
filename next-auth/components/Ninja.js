"use client"

const Ninja = ( { data } ) => {
  const {belt, bucks, id, imgNum, llu, name} = data
  return (
    <div className="outerNinja">
      <div className={`innerLeft ${belt}`}>
        <img className='image' src={`icons/IconSquare${imgNum}.png`}/>
        <p className='ninjaName'>{name}</p>
      </div>
    </div>
  );
}
 
export default Ninja;