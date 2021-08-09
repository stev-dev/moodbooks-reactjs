import React from 'react'
import Navbar from './navbar'
import JumboSection from './jumboSection'
import BookTags from './bookTags'

export default function Home(props) {
    return (
        <div>
            <Navbar/>
            <JumboSection search={props.search}/>
            <BookTags/>
        </div>
    )
}
