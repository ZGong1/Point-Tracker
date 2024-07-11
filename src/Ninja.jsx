import './ninja.css'
import imageList from './utils/image'
import { useState } from 'react'


const Ninja = ( {ninjaList, setNinjaList, name, value} ) => {

  var imgNum = value.imgNum 

  const [edit, setEdit] = useState(false)
  const [editValue, setEditValue] = useState(null)

  // allows toggling editting point value
  const editNinja = () => {
    if (edit) {
      setEdit(false)
      const toEdit = {...ninjaList}
      const newPoints = editValue
      toEdit[name] = {...toEdit[name], points: Number(newPoints)}
      setNinjaList(toEdit)
      setEditValue(null)
    } else {
      setEdit(true)
      setEditValue(value.points)
    }
  }

  // changes to edit box event
  const onChange = event => {
    setEditValue(event.target.value)
  }

  // ice cream button
  const iceCream = () => {

    if (ninjaList[name].ice && ninjaList[name].points >= 10) {
      alert("Ice cream redeemed!")
      const toEdit = {...ninjaList}
      const newPoints = toEdit[name].points - 10
      toEdit[name] = {...toEdit[name], ice: false, points: newPoints}
      setNinjaList(toEdit)
    } else {
      alert("You already got ice cream this month or don't have enough ninja bucks.")
    }

  }

  // level up button
  const levelUp = () => {
    var date = new Date();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    const yyyy = date.getFullYear();
    date = `${mm}/${dd}/${yyyy}`;

    const toEdit = {...ninjaList}
    const newPoints = Number(toEdit[name].points) + 5
    toEdit[name] = {...toEdit[name], points: newPoints, llu: date}

    setNinjaList(toEdit)
    alert(`${name} has leveled up!`)
  }

  // belt up button
  const beltUp = () => {
    var date = new Date();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    const yyyy = date.getFullYear();
    date = `${mm}/${dd}/${yyyy}`;

    const toEdit = {...ninjaList}
    const newPoints = Number(toEdit[name].points) + 15
    toEdit[name] = {...toEdit[name], points: newPoints, llu: date}

    setNinjaList(toEdit)
    alert(`${name} has belted up!`)
  }

  // deletes ninja
  const deleteNinja = () => {
    var toEdit = {...ninjaList}
    delete toEdit[name]
    setNinjaList(toEdit)
    alert(`${name} has been deleted.`)
  }


  return ( 
      <div className="outerNinja">

          <div className={`innerLeft ${value.belt}`}>
              <img className='image' src={imageList[imgNum]}/>
              <p className='ninjaName'>{name}</p>
          </div>

          <div className='ninjaData'>

            <p>Ninja Bucks: 
            {!edit && value.points}
            {edit && <input type='number' value={editValue} onChange={onChange}/>}</p>

            Last Level Up: {value.llu}<br/>

            {value.ice && <p className='emoji'>🍦</p>}
            {!value.ice && <p className='emoji'>❌</p>}

            <div>
              <button onClick={levelUp} className='ninja-button'>Level Up</button>
              <button onClick={beltUp} className='ninja-button'>Belt Up</button>
              <button onClick={iceCream} className='ninja-button'>Ice Cream</button>
            </div>

          </div>
      <div>
        <button onClick={editNinja} className="editButton">✏️</button>
        <button onClick={deleteNinja} className="editButton">❌</button>
      </div>

      </div>
  );
}
 
export default Ninja;