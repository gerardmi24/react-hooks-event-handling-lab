// Code EyesOnMe Component Here
import React from 'react'

export default function EyesOnMe() {

    const blurry = () => {
        console.log('Hey! Eyes on me!')
    }

    const zonedIn = () => {
    console.log('Good!')
    }

    return (
        <button onFocus={zonedIn} onBlur={blurry} text="Eyes on me">
            Eyes on me
        </button>
    )
}
