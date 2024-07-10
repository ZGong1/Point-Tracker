import { useState } from "react";

const NewNinja = ({ninjaList, setNinjaList}) => {

    const [name, setName] = useState('')

    const onChange = event => {
        setName(event.target.value)
    }

    const onClick = value => {
        const date = new Date();
        const mmyyyy = date.toISOString().slice(5, 7) + '/' + date.toISOString().slice(0, 4);
        console.log(mmyyyy)
        var newList = {...ninjaList}
        newList[value] = {
            "points": 0,
            "llu": mmyyyy,
            "ice": true,
            "imgNum": Math.floor(Math.random() * 2)
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