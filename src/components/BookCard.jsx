import React, { useState, useEffect} from 'react'
import '../bookStyle.css'

export default function SingleBook(props) {
    const [bookData, setBookData] = useState(props)
    //this book data object is what we will use and pull data from and use it in the elements 
    //bellow (ex: instead of props.title we will use bookdata.title). to make sure data is up to date.

    useEffect(()=>{
        setBookData(props)
    },[props])
        
    let imgSrc 
    if(bookData.isbn === undefined){
        imgSrc = `http://covers.openlibrary.org/b/olid/${bookData.olid}-M.jpg`
    }else{
        imgSrc = `https://covers.openlibrary.org/b/isbn/${bookData.isbn}-M.jpg`
    }
     
    const bookLinkOpenLibrary = `https://openlibrary.org/books/${bookData.editionKey}`
    return (
        <div>
            <div style={props.custumBookCardStyle}>
                <img id="coverImg" alt="" src={imgSrc}/>
                <h2 id="title">Title: {bookData.title}</h2>
                <h3 id="author">Author: {bookData.author}</h3>
                <h4 id="firstPublished">First Published: {bookData.publishYear}</h4>
                <a id="bookKey" target="alt" href={bookLinkOpenLibrary}><button id="readBtn">Read</button></a>
            </div>
        </div>
    )
}