import React, {useState} from 'react';

import {Switch, Route, BrowserRouter as Router} from 'react-router-dom'
import './App.css';

import Home from './components/Home';
import SingleBook from './components/SingleBook';
import BooksBySubject from './components/BooksBySubject';

function App() {
  const [booktitle, setBooktitle] = useState("")
  const [bookAuthor, setBookAuthor] = useState("")
  const [firstPublishYear, setFirstPublishYear] = useState("")
  const [subject, setSubject] = useState("") 
  const [bookIsbn, setBookIsbn] = useState("")
  const [bookeditionKey, setBookeditionKey] = useState("")
  const [subjectsSearchData, setSubjectsSearchData] = useState()

  const makeQueryCallable = query => query.trim().split(" ").join("+")

  const goSearch = () => {  
    const searchBar = document.getElementById("query-area")
    const searchValue = makeQueryCallable(searchBar.value)
    
    fetch("http://openlibrary.org/search.json?q="+searchValue)
    .then(response => response.json()).then(data=> {
      setBooktitle(data.docs[0].title)
      setBookAuthor(data.docs[0].author_name[0])
      setFirstPublishYear(data.docs[0].first_publish_year)
      setSubject(data.docs[0].subject)
      setBookIsbn(data.docs[0].isbn[0])
      setBookeditionKey(data.docs[0].cover_edition_key)
    }) 
    searchBar.value = ""
  }

  const  makeCategoryQueryCallable = str => str.split(" ").join("_")
  const categorySearch = query =>{
    // let theCategorySelected = event.currentTarget.innerText.toLowerCase()
    // let finalquery = makeCategoryQueryCallable(theCategorySelected)
    let finalquery = makeCategoryQueryCallable(query.toLowerCase())

    fetch("https://openlibrary.org/subjects/"+finalquery+".json")
    .then(res => res.json())
    .then(data => {
      setSubjectsSearchData(data)
    })
  }

  const flushStateData = () => {
    setBooktitle('')
    setBookAuthor('')
    setFirstPublishYear('')
    setSubject('')
    setBookIsbn('')
    setBookeditionKey('')
  }
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" render ={()=><Home 
          search = {goSearch}
          categorySearch = {categorySearch}
          />}/>
          <Route path="/book" render={()=><SingleBook 
          title ={booktitle}
          author = {bookAuthor}
          publishYear = {firstPublishYear} 
          subject = {subject}
          isbn = {bookIsbn}
          editionKey = {bookeditionKey}
          flushData = {flushStateData}/>}/>

          <Route path="/booksBySubject" render={()=><BooksBySubject 
          booksData = {subjectsSearchData}
          flushData = {flushStateData}/>}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;