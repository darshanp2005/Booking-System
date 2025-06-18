import React from 'react'
import { Route, useLocation } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Home from './pages/Home'
import Movies from './pages/Movies'
import MovieDetails from './pages/MovieDetails'
import SeatLayout from './pages/SeatLayout'
import MyBooking from './pages/MyBooking'
import Favorite from './pages/Favorite'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {Toaster} from 'react-hot-toast'

function App() {

  const isAdminRoute = useLocation().pathname.startsWith('/admin')

  return (
    <>
    <Toaster />
      {!isAdminRoute && <Navbar/>}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/movies' element={<Movies/>} />
        <Route path='/movies/:id' element={<MovieDetails/>} />
        <Route path='/movies/:id/:date' element={<SeatLayout/>} />
        <Route path='/my-bookings' element={<MyBooking/>} />
        <Route path='/favorite' element={<Favorite/>} />
      </Routes>
      {!isAdminRoute && <Footer/>}
    </>
  )
}

export default App