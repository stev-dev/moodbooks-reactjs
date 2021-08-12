import React, {useEffect, useState}from 'react'
import BookCard from './BookCard'
import BookHeader from './BookHeader'

export default function BooksBySubject(props) {
    const [bookData, setBookData] = useState(props)
    
    useEffect(()=>{
        setBookData(props)
    },[props])


    const booksData = props.booksData
    console.log("inside booksBySubject")
    console.log(booksData)
        
    // const imgSrc =  `https://covers.openlibrary.org/b/isbn/${bookData.isbn}-M.jpg`
    // const bookLinkOpenLibrary = `https://openlibrary.org/books/${bookData.editionKey}`
    return (
        <div>
            <BookHeader subject = {booksData.works.subject}/>
            <div style={booksCardHolder}>
                {booksData.works.map((elem, indx) => 
                <BookCard key = {indx} custumBookCardStyle = {cardStylemultipleBooks}
                title ={elem.title}
                author = {bookData.author}
                publishYear = {bookData.publishYear}
                isbn = {bookData.isbn}
                editionKey = {bookData.editionKey}/>
                )}
            </div>
        </div>
    )
}

// setBooktitle(data.docs[0].title)
// setBookAuthor(data.docs[0].author_name[0])
// setFirstPublishYear(data.docs[0].first_publish_year)
// setSubject(data.docs[0].subject)
// setBookIsbn(data.docs[0].isbn[0])
// setBookeditionKey(data.docs[0].cover_edition_key)

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
