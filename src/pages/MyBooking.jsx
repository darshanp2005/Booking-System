import React, { useEffect, useState } from 'react'
import { dummyBookingData } from '../assets/assets'
import Loading from '../components/Loading'

function MyBooking() {

  const currency = import.meta.env.VITE_CURRENCY

  const [booking, setBookings] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getMyBookings = async () => {
    setBookings(dummyBookingData)
    setIsLoading(false)
  }

  useEffect(() => {
    getMyBookings()
  }, [])


  return !isLoading ?(
    <div className='relative px-6 md:px-16 lg:px-40 pt-30 md:pt-40
    min-h-[80vh]'>

      <h1 className='text-lg font-semibold mb-4'>My Bookings</h1>

      {booking.map((item,index) => (
        <div key={index} className='flex flex-col md:flex-row justify-between
        bg-primary/8 border-primary/20 rounded-lg mt-4 p-2 max-w-3xl'>
          <div>
             <img src={item.show.movie.poster_path} alt="" className='
             md:max-w-45 aspect-video h-auto object-cover object-bottom
             rounded'/>
             <div className='flex flex-col p-4'>
              <p className='text-lg font-semibold'>{item.show.movie.title}</p>
              <p className='text-gray-400 text-sm'>{item.show.movie.runtime}</p>
              <p className='text-gray-400 text-sm mt-auto'>{item.show.movie.showDateTime}</p>
             </div>
          </div>

        </div>
      ))}
      
    </div>
  ) : <Loading/>
}

export default MyBooking
