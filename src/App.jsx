import React from 'react'
import Header from './components/Header/Header'
import {Route,Routes} from "react-router-dom"
import Main from "./pages/Main/Main.jsx"
import Footer from './components/Footer/Footer'
export default function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Main/>}/>
    </Routes>
    <Footer/>
    </>
  )
}
