import './App.css';
import Home from './components/Home';
import Navbar from './components/navbar';
import SingleBook from './components/singleBook';
import {React, useState, useEffect} from 'react';
import {Link, Route, BrowserRouter as Router} from 'react-router-dom'
 

function App() {
  const [booktitle, setBooktitle] =useState()
  const [bookAuthor, setBookAuthor] =useState()
  const [firstPublishYear, setFirstPublishYear] =useState()
  const [subject, setSubject] =useState() 
  const [bookIsbn, setBookIsbn] =useState()
  const [bookeditionKey, setBookeditionKey] =useState()
  
  const makeQueryCallable = query => query.trim().split(" ").join("+")

  const goSearch = () => {  
    const searchBar = document.getElementById("query-area")
    const searchValue = makeQueryCallable(searchBar.value)
    fetch("http://openlibrary.org/search.json?q="+searchValue)
    .then(response => response.json()).then(data=> {
      setBooktitle(data.docs[0].title)
      setBookAuthor(data.docs[0].author_name[0])
      setFirstPublishYear(data.docs[0].first_publish_year)
      setSubject(data.docs[0].subject[0])
      setBookIsbn(data.docs[0].isbn[0])
      setBookeditionKey(data.docs[0].cover_edition_key)
      console.log(booktitle)
    }) 
    searchBar.value = ""
  }

  /*
  useEffect(() => {
    const listener = e => {
      if (e.code === "Enter" || e.code === "NumpadEnter") {
        e.preventDefault();
        goSearch()
      }
    }
    document.getElementById("query-area").addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, []);
  const listener = e => {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
      e.preventDefault();
      goSearch()
    }
  }
  const queryEvent = document.getElementById("query-area")
  if(queryEvent){
    queryEvent.addEventListener("keydown", listener);
  } 
  */

  return (
    <div>
      <Router>
        <Route exact path="/" component ={()=><Home search = {goSearch}/>}/>
        <Route path="/book" component={()=><SingleBook title ={booktitle}
        author = {bookAuthor}
        publishYear = {firstPublishYear} 
        subject = {subject}
        isbn = {bookIsbn}
        editionKey = {bookeditionKey}/>}/>
      </Router>
    </div>
  );
}

export default App;
