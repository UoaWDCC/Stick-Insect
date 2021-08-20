import React, { useState } from 'react';
import './App.css';
import Pagebuttonpress from './components/Pagebuttonpress';
import MainPage from './components/MainPage';
import ConsentPage from './components/ConsentPage';
import QuestionPage from './components/QuestionPage';


//Parent class for the page components
function App() {
  //Declares new setPage variable, which we call "page"
  const PAGE_MAIN = "main";
  const PAGE_CONSENT = "consent";
  const PAGE_QUESTION = "question";

  const [page, setPage] = React.useState("");
  function pageChange(newPage) {
    if(newPage === PAGE_MAIN) {
      setPage(PAGE_MAIM);
    } else if(newPage === PAGE_CONSENT) {
      setPage(PAGE_CONSENT);
    } else if(newPage === PAGE_QUESTION) {
      setPage(PAGE_QUESTION);
    }
  }



  // We pass a callback to Child
  return (
    <Pagebuttonpress page = {page} onButtonClick ={pageChange}/>
  )
}

{['MainPage', 'ConsentPage', 'QuestionPage'].map((page) => (





export default App;