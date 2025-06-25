import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { assets, dummyDateTimeData, dummyShowsData } from '../assets/assets'
import Loading from '../components/Loading'
import { ArrowRightIcon, ClockIcon } from 'lucide-react'
import isoTimeFormat from '../lib/isoTimeFormat'
import toast from 'react-hot-toast'

function SeatLayout() {

  const groupRows = [["A", "B"], ["C", "D"], ["E", "F"],["G", "H"],["I", "J"]]

  const {id,date} = useParams()

  const [selectedSeats, setSelectedSeats] = useState([])
  const [selectedTime, setSelectedTime] = useState(null)
  const [show, setShow] = useState(null)

  const navigate = useNavigate()

  const getShow = async() => {
    const show = dummyShowsData.find(show => show._id === id)
    if(show){
      setShow({
        movie:show,
        dateTime: dummyDateTimeData
      })
    }
  }

  const handleSeatClick = (seatId) => {
    if(!selectedTime) {
      return toast("Please select time first")
    }
    if(!selectedSeats.includes(seatId) && selectedSeats.length > 4){
      return toast("You can only select 5 seats")
    }
    setSelectedSeats(prev => prev.includes(seatId) ? prev.filter(seat => 
      seat !== seatId) : [...prev, seatId])
  }

  //TODO: For seats showing
  const renderSeats = (row, count = 9) => (
  <div key={row} className="flex gap-2 mt-2">
    <div className="flex flex-wrap items-center justify-center gap-2">
      {Array.from({ length: count }, (_, i) => {
        const seatId = `${row}${i + 1}`;
        return (
          <button
            key={seatId}
            onClick={() => handleSeatClick(seatId)}
            className={`h-8 w-8 rounded border border-primary/60 cursor-pointer ${
              selectedSeats.includes(seatId) && "bg-red-500 text-white"
            }`}
          >
            {seatId}
          </button>
        );
      })}
    </div>
  </div>
  );

  useEffect(() => {
    getShow()
  }, [])

  return show ?(
    // ...existing code...
   <div className='flex flex-col md:flex-row px-6 md:px-16 lg-px-40 placeholder-sky-300
      mt:pt-50'>
       {/* {TODO: Avalable Timing} */}

       <div className='w-60 bg-primary/10 border border-primary/20 rounded-lg
         py-10 h-max md:sticky md:top-30'>
        <p className='text-lg font-semibold px-6'>Available Timing</p>
       <div>
         {show.dateTime[date].map((item, idx) => (
         <div
           key={idx} onClick={() => setSelectedTime(item)}
           className={`mt-5 space-y-1 flex items-center gap-2 px-6 py-2 w-max rounded-r-md
           cursor-pointer transition ${selectedTime?.time === item.time ?
            "bg-blue-500 text-white" : "hover:bg-primary/20"
           }`}>

           <ClockIcon className='w-4 h-4'/>

           <p className='text-sm'>{isoTimeFormat(item.time)}</p>
          </div>
         ))}
       </div>
    </div>

       {/* {TODO: Seat Layout} */}
        <div className='relative flex-1 flex flex-col items-center pt-32 max-md:pt-28'>
          <h1 className='text-2xl font-semibold mb-4'>You have to Select Your Seat After Selecting Time</h1>
          <img src={assets.screenImage} alt="screen"/>
          <p className='bg-gray-500 text-gray-400 text-sm mb-6'>SCREEN SIDE</p>

          <div className='flex flex-col items-center mt-10 text-xs text-gray-300'>
            <div className='grid grid-cols-2 md:grid-cols-1 gap-8 md:gap-2 mb-6'>
              {groupRows[0].map(row => renderSeats(row))}
            </div>

          <div className='font-semibold grid grid-cols-2 gap-11'>
            {groupRows.slice(1).map((group, idx) => (
              <div key={idx}>
                {group.map(row => renderSeats(row
               ))}
               </div>  
              ))}
           </div>  
          </div>

          <button
            onClick={() => {navigate('/my-bookings'); scrollTo(0,0)}}
            className="flex items-center gap-2 mt-10 px-10 py-3 text-sm 
            bg-blue-600 hover:bg-blue-700 transition rounded-full 
            font-medium text-white cursor-pointer active:scale-95"
          >
           Click For Checkout
          <ArrowRightIcon strokeWidth={3} className="w-4 h-4" />
          </button>

        </div>
        
      </div>
  ) : (
    <Loading/>
  )
}

export default SeatLayout
