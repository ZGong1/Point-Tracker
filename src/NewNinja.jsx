import { useState } from "react";

const NewNinja = ({ninjaList, setNinjaList}) => {

    const [name, setName] = useState('')

    const onChange = event => {
        setName(event.target.value)
    }

    const onClick = value => {
        const date = new Date();
        const mmdd = date.toISOString().slice(5, 10).replace('-', '/');
        console.log("value: ", value)
        var newList = {...ninjaList}
        newList[value] = {
            "points": 0,
            "llu": mmdd,
            "ice": false
        }
        setNinjaList(newList)
        setName('')
        alert("Ninja successfully added!")
    }

    return ( 
        <div>
            <h1>Enter New Ninja's Info</h1>
            Name: <input value={name} onChange={onChange} />
            <button onClick={() => onClick(name)}>Add</button>
        </div>
    );
}
 
export default NewNinja;