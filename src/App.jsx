import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './component/Nav'
import Home from './component/Home'
import Works from './component/Works'
import Aboutus from './component/About'
import Resume from './component/Resume'
import Contact from './component/Contact'

export default function App() {
  return(
    <>
    <Nav/>
    <Home/>
    <Works/>
    <Aboutus/>
    <Resume/>
    <Contact/>
    </>
  )
}


