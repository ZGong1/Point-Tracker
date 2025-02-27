import { useState } from "react";
import logAction from "./utils/logger";
import setNotification from "./utils/notification";

const NewNinja = ( { ninjaList, setNinjaList, setAlert } ) => {

    const [name, setName] = useState('')
    const [bucks, setBucks] = useState(0)

    // changes name state
    const onChangeName = event => {
        setName(event.target.value)
    }

    // changes bucks state
    const onChangeBucks = event => {
        setBucks(event.target.value)
    }

    // Creates new ninja
    const onClick = value => {
        // checks if ninja already exists first
        if (ninjaList[value]) return setNotification(setAlert, `${value} is already a ninja!`, "yellow")

        const date = new Date();
        const mmyyyy = date.toISOString().slice(5, 7) + '/' + date.toISOString().slice(0, 4);
        var newList = {...ninjaList}
        newList[value] = {
            "points": bucks,
            "llu": "N/A",
            "ice": true,
            "imgNum": Math.floor(Math.random() * 20),
            "belt": "white"
        }
        setNinjaList(newList)
        setName('')
        setNotification(setAlert, "Ninja successfully added!", "green")

        logAction(`${value} has been created as a new ninja with ${bucks} ninja bucks!`)
    }

    return ( 
        <div>
            <h1>Enter New Ninja's Info</h1>
            Name: <br/><input value={name} onChange={onChangeName} /><br/>
            Ninja Bucks: <br/><input type="number" value={bucks} onChange={onChangeBucks}/><br/><br/>
            <button onClick={() => onClick(name)}>Add</button>
        </div>
    );
}
 
export default NewNinja;