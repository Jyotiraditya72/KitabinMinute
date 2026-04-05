import {useState} from 'react'
import './App.css'
import Banner from './components/banner'
import Login from  './pages/login'
import Cart from './pages/cart'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header'


function App() {
   const [isLoggedIn, setIsLoggedIn] = useState(false); 

  return (
    <>
	 <BrowserRouter> {/* Everything using Router features must be inside here */}
      <Header isLoggedIn={isLoggedIn}/> 
	  <Banner/>
      <Routes>
	 
        <Route path="/Cart" element={<Cart isLoggedIn={isLoggedIn} />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
      </Routes>
    </BrowserRouter>
      <section className="content">
    </section>
	</>
  )
}

export default App
