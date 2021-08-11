import React, { useState, useEffect} from 'react'

export default function SingleBook(props) {
    const [bookData, setBookData] = useState(props)
    //this book data object is what we will use and pull data from and use it in the elements 
    //bellow (ex: instead of props.title we will use bookdata.title). to make sure data is up to date.
    
    useEffect(()=>{
        setBookData(props)
    },[props])
    console.log(props)
        
    const imgSrc =  `https://covers.openlibrary.org/b/isbn/${bookData.isbn}-M.jpg`
    const bookLinkOpenLibrary = `https://openlibrary.org/books/${bookData.editionKey}`
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
                <img id="coverImg" alt="" src={imgSrc}/>
                <h2 id="title">Title: {bookData.title}</h2>
                <h3 id="author">Author: {bookData.author}</h3>
                <h4 id="firstPublished">First Published: {bookData.publishYear}</h4>
                <a id="bookKey" target="alt" href={bookLinkOpenLibrary}><button id="readBtn">Read</button></a>
            </div>
        </div>
    )
}
