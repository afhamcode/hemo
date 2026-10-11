import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Why_Hemo from './components/Why_Hemo'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Home from "./Pages/Home";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import FindBlood from "./Pages/FindBlood";
import DonateBlood from "./Pages/DonateBlood";
import CreateBloodRequest from "./Pages/CreateBloodRequest";

function App() {


  return (
    
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/find blood" element={<FindBlood/>}/>
    <Route path="/Donate blood" element={<DonateBlood/>}/>
    <Route path="/create blood request" element={<CreateBloodRequest/>}/>


  </Routes>
  </BrowserRouter>
   
    
  )
}

export default App
