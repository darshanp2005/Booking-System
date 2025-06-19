import React from 'react'
import { dummyShowsData } from '../assets/assets'
import MovieCard from '../components/MovieCard'

function Favorite() {
  return dummyShowsData.length > 0 ?(
    <div className='relative my-40 mb-60 px-6 md:px-16 lg:px-40 xl:px-14
    overflow-hidden min-h-[80vh]'>

      <h1 className='text-lg font-medium my-4'>Favourite Movies</h1>
      <div className='flex flex-wrap max-sm:justify-center gap-3'>
        {dummyShowsData.map((movie) => (
          <MovieCard movie={movie} key={movie._id}/>
        ))}
      </div>
    </div>
  ) : (
    // TODO: Message if movie is not available
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-3xl font-bold text-center'>🫤 Movies not available right now</h1>
    </div>
  )
}

export default Favorite
