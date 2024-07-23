"use client";

import { useState } from "react";
import { login } from "@/lib";

const LoginPage = ( props ) => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    
    const onLogin = () => {
        login({username, password})
    } 

    return (
        <div>
            username: <input type="email" value={username} onChange={(e) => setUsername(e.target.value)}/> <br/>
            password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/> <br/>
            <button onClick={onLogin}>Login</button>
            <button type="submit">Logout</button>
        </div>
    )
}

export default LoginPage