'use client'

import React from 'react'
// Ensure to uncomment and use these imports if needed for state or effects
// import { useEffect, useState } from 'react'

type SomePageProps = {
    someProp: string
}

export default function SomePage({ someProp }: SomePageProps) {
    // Example of using someProp
    // const [someState, setSomeState] = useState<string>('')
    // useEffect(() => {
    //     setTimeout(() => {
    //         // Do something in the useEffect
    //     }, 1000)
    // }, [])
    return (
        <>
            <h1>{someProp}</h1>
        </>
    )
}
