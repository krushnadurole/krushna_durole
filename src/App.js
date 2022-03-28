import './App.css';
import React from 'react';
import Intro from './components/intro/Intro';
import About from './components/About/About';
import ProductList from './components/ProductList/ProductList';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <>
    <Intro/>
    <About/>
    <ProductList/>
    <Contact/>
    </>
  )
}

export default App
