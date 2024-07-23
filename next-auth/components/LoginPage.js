"use client";

import { useState } from "react";
import { login, logout } from "@/lib";

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
            <button onClick={onLogin}>Login</button>
            <button onClick={onLogout}>Logout</button>
        </div>
    )
}

export default LoginPage