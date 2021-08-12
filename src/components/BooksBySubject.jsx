import React, {useEffect, useState}from 'react'
import BookCard from './BookCard'
import BookHeader from './BookHeader'

export default function BooksBySubject(props) {
    const [bookData, setBookData] = useState(props)
    
    useEffect(()=>{
        setBookData(props)
    },[props])

    let testArray = [1,4,3,5,6,7]
        
    // const imgSrc =  `https://covers.openlibrary.org/b/isbn/${bookData.isbn}-M.jpg`
    // const bookLinkOpenLibrary = `https://openlibrary.org/books/${bookData.editionKey}`
    return (
        <div>
            <BookHeader subject = {bookData.subject}/>
            <div style={booksCardHolder}>
                {testArray.map((elem, indx) => 
                <BookCard key = {indx} custumBookCardStyle = {cardStylemultipleBooks}
                title ={elem}
                author = {bookData.author}
                publishYear = {bookData.publishYear}
                isbn = {bookData.isbn}
                editionKey = {bookData.editionKey}/>
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
    margin: '10px',
    background: 'radial-gradient(#1fe4f5, #3fbafe)',
    boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.25)',
    transition: 'all 0.5s',
    padding: '15px',
    borderRadius: '10px',
    textAlign: 'center'
}
