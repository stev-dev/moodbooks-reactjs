import React, {useEffect, useState}from 'react'

export default function TestingPropsHooks(props) {
    const [prophere, setProphere] = useState(props)

    useEffect(()=>{
        setProphere(props)
    },[props])
    
    return (
        <div>
            <h1>Hello from test prop</h1>
            {props.title}
        </div>
    )
}
