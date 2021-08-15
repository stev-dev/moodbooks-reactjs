import React from 'react'
import BookCard from './BookCard'
import BookHeader from './BookHeader'
import logo from '../res/circle-physic.gif'
import { useEffect, useState } from 'react'

export default function BooksBySubject(props) {

    // const fetchForIsbnReasons = async (searchVal) => {
    //     let isbn = ""
    //     const query = searchVal.trim().split(" ").join("+")
    //     const resp = await fetch("http://openlibrary.org/search.json?q="+query)
    //     const data = await resp.json()
    //     console.log(data.docs[0].isbn[0])
    //     return data.docs[0].isbn[0]
    // }
    const [savedprops, setSavedprops] = useState(props)

    useEffect(()=>{
        setSavedprops(props)
    },[props])

    //console.log(props.booksData.works[0])
    console.log(savedprops)


    return (
        props.booksData === undefined? 
        <div style={{textAlign:'center', marginTop:'15%'}}>
            <img src={logo} alt="loading..." style={{maxWidth:'90px',maxHeight:'90px'}}/>
        </div> 
        : 

        <div>
            <BookHeader worksToGetSubjects = {props.booksData.works} />

            <div style={booksCardHolder}>
                {props.booksData.works.map((elem, indx) => 
                <BookCard key = {indx} custumBookCardStyle = {cardStylemultipleBooks}
                olid = {elem.cover_edition_key}
                title ={elem.title}
                author = {elem.authors[0].name}
                editionKey = {elem.cover_edition_key}
                publishYear = {elem.first_publish_year === null? "not available": elem.first_publish_year}
                />
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

