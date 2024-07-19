import './ninja.css'
import imageList from './utils/image'
import { useState } from 'react'
import {nextBelt, prevBelt} from './utils/beltUp'
import logAction from './utils/logger'
import setNotification from './utils/notification'


const Ninja = ( { ninjaList, setNinjaList, name, value, authorized, setAlert } ) => {

  var imgNum = value.imgNum 

  const [edit, setEdit] = useState(false)
  const [editValue, setEditValue] = useState(null)


  // changes to edit box event
  const onChange = event => {
    setEditValue(event.target.value)
  }

  // allows toggling editting point value
  const editNinja = () => {
    if (!authorized) return alert("Not authorized")

    if (edit) {
      setEdit(false)
      const toEdit = {...ninjaList}
      const newPoints = editValue
      const oldValue = toEdit[name].points
      toEdit[name] = {...toEdit[name], points: Number(newPoints)}
      setNinjaList(toEdit)
      setEditValue(null)
      logAction(`${name} was changed to have ${newPoints} from ${oldValue}`)
    } else {
      setEdit(true)
      setEditValue(value.points)
    }
  }

  // ice cream button
  const iceCream = () => {
    if (!authorized) return alert("Not authorized")

    if (ninjaList[name].ice && ninjaList[name].points >= 10) {
      setNotification(setAlert, "Ice cream redeemed!", "green")
      const toEdit = {...ninjaList}
      const newPoints = toEdit[name].points - 10
      toEdit[name] = {...toEdit[name], ice: false, points: newPoints}
      setNinjaList(toEdit)
      logAction(`${name} got ice cream!`)
    } else {
      setNotification(setAlert, "You already got ice cream this month or don't have enough ninja bucks.", "yellow")
    }

  }

  // level up button
  const levelUp = () => {
    if (!authorized) return alert("Not authorized")

    var date = new Date();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    const yyyy = date.getFullYear();
    date = `${mm}/${dd}/${yyyy}`;

    const toEdit = {...ninjaList}
    const newPoints = Number(toEdit[name].points) + 5
    toEdit[name] = {...toEdit[name], points: newPoints, llu: date}

    setNinjaList(toEdit)
    logAction(`${name} has leveled up!`)
    alert(`${name} has leveled up!`)
  }

  // belt up button
  const beltUp = () => {
    if (!authorized) return alert("Not authorized")

    var date = new Date();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    const yyyy = date.getFullYear();
    date = `${mm}/${dd}/${yyyy}`;

    const toEdit = {...ninjaList}
    const newPoints = Number(toEdit[name].points) + 15
    const newBelt = nextBelt(ninjaList[name].belt)
    toEdit[name] = {...toEdit[name], points: newPoints, llu: date, belt: newBelt}

    setNinjaList(toEdit)
    alert(`${name} has belted up!`)
    logAction(`${name} has belted up!`)
  }

  // belt down button
  const beltDown = () => {
    const toEdit = {...ninjaList}
    const newBelt = prevBelt(ninjaList[name].belt)
    toEdit[name] = {...toEdit[name], belt: newBelt}
    setNinjaList(toEdit)
    alert(`${name} has belted down!`)
    logAction(`${name} has been belted down`)
  }

  // deletes ninja
  const deleteNinja = () => {
    var toEdit = {...ninjaList}
    delete toEdit[name]
    setNinjaList(toEdit)
    alert(`${name} has been deleted.`)
    logAction(`${name} has been deleted, and had ${value.points} ninja bucks`)
  }


  return ( 
      <div className="outerNinja">

          <div className={`innerLeft ${value.belt}`}>
              <img className='image' src={`icons/IconSquare${imgNum}.png`}/>
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
              <button onClick={levelUp} className='ninja-button' >Level Up</button>
              <button onClick={beltUp} className='ninja-button' >Belt Up</button>
              {authorized && <button onClick={beltDown} className='ninja-button' >Belt Down</button>}
              <button onClick={iceCream} className='ninja-button' >Ice Cream</button>
            </div>

          </div>
      <div>
        <button onClick={editNinja} className="editButton">✏️</button>
        { authorized && edit && <button onClick={deleteNinja} className="editButton">❌</button> }
      </div>

      </div>
  );
}
 
export default Ninja;