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

    const onLogout = () => {
        logout()
    }

    return (
        <div>
            username: <input type="email" value={username} onChange={(e) => setUsername(e.target.value)}/> <br/>
            password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/> <br/>
            <button className="ninja-button" onClick={onLogin}>Login</button>
        </div>
    )
}

export default LoginPage