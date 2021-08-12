import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <nav style = {navStyles}>
                <ul style={ulStyles}>
                    <li style={liStyle}><Link to="./" style={liAnchorStyles} >Home</Link></li>
                    <li style={liStyle}><Link to="./" style={liAnchorStyles} >About</Link></li>
                    <li style={liStyle}><Link to="./" style={liAnchorStyles} >contact</Link></li>
                    <li style={liStyle}><Link to="./booksBySubject" style={liAnchorStyles} >testBooksBySubject</Link></li>
                </ul>
            </nav>
        </div>
    )
}
const navStyles ={
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
}

const ulStyles = {
    listStyle: 'none',
    display: 'flex',
}


const liStyle = {
    marginLeft: '1.7rem',//i did this calculation befor h_h 1.7*16,/*1rem = 1rem equals the font size of the html element (16px)*/
    fontSize: 'large',
    fontWeight: 'bold',
    fontFamily: 'monospace courier '
}

const liAnchorStyles = {
    textDecoration: 'none',
    color: 'black',
}