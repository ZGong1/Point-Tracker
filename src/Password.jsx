import { useState } from "react";
import setNotification from "./utils/notification";

const Password = ( { authorized, setAlert } ) => {
    const [old1, setOld1] = useState("")
    const [input, setInput] = useState("")   

    const onPasswordChange = () => {
        if (!authorized) return setNotification(setAlert, "Not authorized!", "red")

        console.log("test")
    }

    return (
        <div>
            <h1>Change password: </h1>
            Old Password: <input type="password" value={old1} onChange={(e) => setOld1(e.target.value)}/><br/>
            New Password: <input type="password" value={input} onChange={(e) => setInput(e.target.value)}/><br/>
            <button onClick={onPasswordChange}>Change password</button>
        </div>
    );
}
 
export default Password;