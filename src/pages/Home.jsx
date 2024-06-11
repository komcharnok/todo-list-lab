// import React from 'react'
import { useContext } from "react";

import AuthContext from "../contexts/AuthContext";


export default function Home() {
    const { isLogin, user } = useContext(AuthContext);

    return (
        <div>
            <h1>Hello, {isLogin ? user.name : 'Guest'}</h1>
        </div>
    )
}
