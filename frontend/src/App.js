import React, { useState } from 'react';
import './App.css';
import Pagebuttonpress from './components/Pagebuttonpress';
import MainPage from './components/MainPage';
import ConsentPage from './components/ConsentPage';
import QuestionPage from './components/QuestionPage';


//Parent class for the page components
function App() {
  //Declares new setPage variable, which we call "page"
  const [page, setPage] = React.useState("");
  function pageChange(newPage) {
    setPage(newPage);
  }
  // We pass a callback to Child
  return <Pagebuttonpress page = {page} onButtonClick ={pageChange}>
    


  </Pagebuttonpress>;
}

{['MainPage', 'ConsentPage', 'QuestionPage'].map((page) => (





export default App;