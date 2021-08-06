import React from 'react'

export default function Navbar() {
    return (
        <div>
            <ul style={ulStyles}>
                <li style={liStyle}><a style={liAnchorStyles} href="#">Home</a></li>
                <li style={liStyle}><a style={liAnchorStyles} href="#">About</a></li>
                <li style={liStyle}><a style={liAnchorStyles} href="#">contact</a></li>
            </ul>
        </div>
    )
}

const ulStyles = {
    listStyle: 'none',
    display: 'flex',
}


const liStyle = {
    marginLeft: 1.7*16,/*1rem = 1rem equals the font size of the html element (16px)*/
    fontSize: 'large',
    fontWeight: 'bold',
    fontFamily: 'monospace courier '
}

const liAnchorStyles = {
    textDecoration: 'none',
    color: 'black',
}