import React from 'react'
import { useAlert } from "./AlertContext";

export default function Main() {
    const {show} = useAlert()

    return (
        <>
            <h1>Привет в примере с useReducer</h1>
            <button onClick={() => show('Text form Main.js')} className="btn btn-success">Показать alert</button>
        </>
    )
}