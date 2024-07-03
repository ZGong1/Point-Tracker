import { useState } from "react";

const NewNinja = ({ninjaList, setNinjaList}) => {

    const [name, setName] = useState('')

    const onChange = event => {
        setName(event.target.value)
    }

    const onClick = value => {
        console.log("value: ", value)
        var newList = {...ninjaList}
        newList[value] = {
            "points": 0,
            "llu": "MMYY",
            "ice": true
          }
        setNinjaList(newList)
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