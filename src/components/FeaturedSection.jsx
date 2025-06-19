import { ArrowRight } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import BlurCircle from './BlurCircle';
import { dummyShowsData } from '../assets/assets';
import MovieCard from './MovieCard';

function FeaturedSection() {

    const navigate = useNavigate();

  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-44 overflow-hidden'>
      
      <div className='relative flex items-center justify-between pt-20 pb-10'>

        <BlurCircle top='0' right='-80px'/>

        <p className='text-gray-300 font-medium text-lg'>Now Showing</p>
        <button onClick={() => navigate('/movies')} className='group flex items-center gap-2 text-sm
        text-gray-300 cursor-pointer'>
            View All
            <ArrowRight className='group-hover:translate-x-0.5 transition w-4.5 h-4.5'/>
        </button>
      </div>

        <div className="flex justify-between gap-5 mt-5">
         {dummyShowsData.slice(0, 4).map((show) => (
           <div key={show._id} className="w-1/4">
         <MovieCard movie={show} />
           </div>
           ))}
        </div>

    <div className='flex justify-center mt-6'>
     <button onClick={() => {
      navigate('/movies');
      scrollTo(0, 0);
    }}
    className='px-10 py-3 text-sm bg-blue-800 hover:bg-primary-dull transition rounded-md font-medium cursor-pointer'
    >
    More
  </button>
</div>


    </div>
  )
}

export default FeaturedSection
