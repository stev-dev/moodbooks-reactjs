import React, {useEffect, useState}from 'react'
import { Link } from 'react-router-dom'

export default function BookHeader(props) {
    const [properties, setProperties] = useState(props)

    useEffect(props => {
        setProperties(props)
    }, [props])

    return (
        <div>
            <header style={headerItems}>
                <Link to="./" className="backLink">
                    <button className="backBtn">
                        <div className="arrow-left"></div>back
                    </button>
                </Link>
                <h3 id="moodbooksLogo" style = {moodbooksLogo}>Moodbooks</h3>
                <div id="rightToHelpCenterLogo" style={{width:'80px'}}></div>
            </header>
            <h3 style={BookSubjectStyles}>subjects: 
                <span id="subject">{props.subject[0]}, </span>
                <span id="subject">{props.subject[1]}, </span>
                <span id="subject">{props.subject[2]} </span>
            </h3>
        </div>
    )
}

const headerItems = {
    display: 'flex',
    justifyContent: 'space-between'
}
const moodbooksLogo = {
    color: '#fff',
    fontFamily: 'SweetHipster, monospace',
    fontWeight: 'bolder',
    fontSize: 45,
    textshadow: '5px 5px 1px #07bccc, 10px 10px 2px #f40468, 15px 15px 10px #482896'
}

const BookSubjectStyles = {
    width: '70%',
    margin: '10px auto 20px auto',
    background: '#a0bbff',
    color: '#fff',
    padding: '15px',
    textAlign: 'center',
    fontSize: '27px',
    boxShadow: '10px 10px #e4a0ff'
}