import React from 'react'
import BookCard from './BookCard'
import BookHeader from './BookHeader'

export default function BooksBySubject(props) {
        
    // const imgSrc =  `https://covers.openlibrary.org/b/isbn/${bookData.isbn}-M.jpg`
    // const bookLinkOpenLibrary = `https://openlibrary.org/books/${bookData.editionKey}`
    console.log(props)
    return (
        props.booksData === undefined ? <h2>khdamin 3la books data h_h</h2> : 

        <div>
            <BookHeader subject = {props.booksData.works[0].subject}/>

            <div style={booksCardHolder}>
                {props.booksData.works.map((elem, indx) => 
                <BookCard key = {indx} custumBookCardStyle = {cardStylemultipleBooks}
                title ={elem.title}
                author = {elem.authors.name}
                editionKey = {"need further work"}
                publishYear = {"need further work"}
                isbn = {"need further work"}/>
                )}
            </div>
        </div>
    )
}

const booksCardHolder ={
    display : 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
}

const cardStylemultipleBooks = {
    maxWidth:  '250px',
    margin: '10px',
    background: 'radial-gradient(#1fe4f5, #3fbafe)',
    boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.25)',
    transition: 'all 0.5s',
    padding: '15px',
    borderRadius: '10px',
    textAlign: 'center'
}
