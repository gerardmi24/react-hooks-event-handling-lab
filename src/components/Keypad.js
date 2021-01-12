// Code Keypad Component Here
import React from 'react'

export default function Keypad() {

    const eventHandler = () => {
        console.log('Entering password...')
    }
    
    return (
        <input onChange={eventHandler} type="password" />
    )
}
