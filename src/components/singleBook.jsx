import React from 'react'

export default function SingleBook(props) {
    return (
        <div>
            <header className="headerItems">
                <a href="./" className="backLink">
                    <button className="backBtn">
                        <div className="arrow-left"></div>back
                    </button>
                </a>
            </header>
            <h2>subject: <span id="subject"></span></h2>
            <div id="booksContainer">
                <img id="coverImg"/>
                <h2 id="title">Title: {props.title}</h2>
                <h3 id="author">Author: {props.author}</h3>
                <h4 id="firstPublished">First Published: {props.publishYear}</h4>
                <a id="bookKey" target="alt"><button id="readBtn">Read</button></a>
            </div>
        </div>
    )
}
