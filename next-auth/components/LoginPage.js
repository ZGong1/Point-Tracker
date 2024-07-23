"use client";

import { useState } from "react";
import { login, logout, addNinja } from "@/lib";

const LoginPage = ( props ) => {

    // change defaults after testing
    const [username, setUsername] = useState("cstat")
    const [password, setPassword] = useState("12345678")
    
    const onLogin = () => {
        login({username, password})
    }

    return (
        <form action={onLogin}>
            username: <input value={username} onChange={(e) => setUsername(e.target.value)}/> <br/>
            password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/> <br/>
            <button className="ninja-button" type="submit">Login</button>
        </form>
    )
}

export default LoginPage