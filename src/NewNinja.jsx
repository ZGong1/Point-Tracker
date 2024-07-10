import { useState } from "react";

const NewNinja = ({ninjaList, setNinjaList}) => {

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
        const date = new Date();
        const mmyyyy = date.toISOString().slice(5, 7) + '/' + date.toISOString().slice(0, 4);
        var newList = {...ninjaList}
        newList[value] = {
            "points": bucks,
            "llu": "N/A",
            "ice": true,
            "imgNum": Math.floor(Math.random() * 2),
            "belt": "white"
        }
        setNinjaList(newList)
        setName('')
        alert("Ninja successfully added!")
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