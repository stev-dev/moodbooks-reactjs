import React, {useState} from 'react';

import {Switch, Route, BrowserRouter as Router, useHistory} from 'react-router-dom'
import './App.css';

import Home from './components/Home';
import SingleBook from './components/singleBook';
import TestingPropsHooks from './components/TestingPropsHooks';


function App() {

  const [booktitle, setBooktitle] = useState("")
  const [bookAuthor, setBookAuthor] = useState("")
  const [firstPublishYear, setFirstPublishYear] = useState("")
  const [subject, setSubject] = useState("") 
  const [bookIsbn, setBookIsbn] = useState("")
  const [bookeditionKey, setBookeditionKey] = useState("")

  const makeQueryCallable = query => query.trim().split(" ").join("+")

  const goSearch = () => {  
    const searchBar = document.getElementById("query-area")
    const searchValue = makeQueryCallable(searchBar.value)
    console.log("the query befor fetch is: "+searchValue)
    fetch("http://openlibrary.org/search.json?q="+searchValue)
    .then(response => response.json()).then(data=> {
      setBooktitle(data.docs[0].title)
      setBookAuthor(data.docs[0].author_name[0])
      setFirstPublishYear(data.docs[0].first_publish_year)
      setSubject(data.docs[0].subject[0])
      setBookIsbn(data.docs[0].isbn[0])
      setBookeditionKey(data.docs[0].cover_edition_key)
      }) 
    searchBar.value = ""
  }

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" render ={()=><Home search = {goSearch}/>}/>
          <Route path="/book" render={()=><SingleBook 
          title ={booktitle}
          author = {bookAuthor}
          publishYear = {firstPublishYear} 
          subject = {subject}
          isbn = {bookIsbn}
          editionKey = {bookeditionKey}/>}/>
          <Route path="/propesting" render={()=><TestingPropsHooks title={booktitle}/>}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;