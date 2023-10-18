//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
//fixed 
import {BrowserRouter, Routes, Route, } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';

import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Nav from './components/Nav';

function App() {
  

  return (

    <BrowserRouter>
      
      <Header/>

      <Nav/>
        <Routes>
          <Route path='/' element={<AboutMe/>}></Route>
          <Route path='/about' element={<AboutMe/>}></Route>
          <Route path='/projects' element={<Portfolio/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/resume' element={<Resume/>}></Route>

        </Routes>
      <Footer/>  
      </BrowserRouter>
  
  )

}
  
export default App;