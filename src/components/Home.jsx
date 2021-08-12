import React from 'react'
import Navbar from './Navbar'
import JumboSection from './JumboSection'
import BookTags from './BookTags'

export default function Home(props) {
    return (
        <div>
            <Navbar/>
            <JumboSection search={props.search}/>
            <BookTags categorySearch = {props.categorySearch}/>
        </div>
    )
}
