import './App.css';
import Navbar from './components/navbar';
import JumboSection from './components/jumboSection';
import BookTags from './components/bookTags';
import React from 'react';
import {useState, useEffect} from 'react'
 

function App() {
  const [bookTitle, setBookTitle] = useState()
  
  const makeQueryCallable = query => query.trim().split(" ").join("+")

  const goSearch = () => {  
    const searchBar = document.getElementById("query-area")
    const searchValue = makeQueryCallable(searchBar.value)
    fetch("http://openlibrary.org/search.json?q="+searchValue)
    .then(response => response.json()).then(data=> setBookTitle(data.docs[0].title)) 
    searchBar.value = ""
  }


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

  return (
    <>
      <Navbar/>
      <JumboSection title={bookTitle} search={goSearch}/>
      <BookTags/>
    </>
  );
}

export default App;
