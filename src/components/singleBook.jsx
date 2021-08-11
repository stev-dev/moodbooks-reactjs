import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import '../bookStyle.css'
export default function SingleBook(props) {
    const [bookData, setBookData] = useState(props)
    //this book data object is what we will use and pull data from and use it in the elements 
    //bellow (ex: instead of props.title we will use bookdata.title). to make sure data is up to date.

    useEffect(()=>{
        setBookData(props)
    },[props])
        
    const imgSrc =  `https://covers.openlibrary.org/b/isbn/${bookData.isbn}-M.jpg`
    const bookLinkOpenLibrary = `https://openlibrary.org/books/${bookData.editionKey}`
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
                <span id="subject">{bookData.subject[0]}, </span>
                <span id="subject">{bookData.subject[1]}, </span>
                <span id="subject">{bookData.subject[2]} </span>
            </h3>
            <div id="booksContainer" style={{margin: '10px auto'}}>
                <img id="coverImg" alt="" src={imgSrc}/>
                <h2 id="title">Title: {bookData.title}</h2>
                <h3 id="author">Author: {bookData.author}</h3>
                <h4 id="firstPublished">First Published: {bookData.publishYear}</h4>
                <a id="bookKey" target="alt" href={bookLinkOpenLibrary}><button id="readBtn">Read</button></a>
            </div>
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