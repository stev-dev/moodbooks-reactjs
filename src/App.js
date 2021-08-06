import './App.css';
import Navbar from './components/navbar';
import JumboSection from './components/jumboSection';
import BookTags from './components/bookTags';
import React from 'react';

function App() {
  return (
    <>
      <Navbar/>
      <JumboSection/>
      <BookTags/>
    </>
  );
}

export default App;
