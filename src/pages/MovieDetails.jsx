import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { dummyDateTimeData, dummyShowsData } from '../assets/assets';
import { Heart, PlayCircleIcon, StarIcon } from 'lucide-react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import DateSelect from '../components/DateSelect';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

function MovieDetails() {

  const[loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const scrollContainerRef = useRef(null);

  const getShow = async () => {
    
     //TODO: For incorrect id it shows loading effect on the screen.
     setLoading(true);
     const Show = dummyShowsData.find(show => show._id === id);
     if (Show) {
      setShow({
       movie: Show,
       dateTime: dummyDateTimeData,
      });
    }
  setLoading(false);
};

  // Helper to convert runtime in minutes to "Hh Mm" format
  const timeFormat = (runtime) => {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return `${hours}h ${minutes}m`;
  };

  useEffect(() => {
    getShow();
  }, [id]);

  return show ? (
    <div className="px-6 md:px-16 lg:px-40 pt-30 md:pt-50">
      <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
        <img
          src={show.movie.poster_path}
          alt={show.movie.title}
          className="max-md:mx-auto rounded-xl h-104 max-w-70 object-cover"
        />

        <div className="relative flex flex-col gap-3">
          <p className="text-primary">ENGLISH</p>
          <h1 className="text-4xl font-semibold max-w-96 text-balance">
            {show.movie.title}
          </h1>

          <div className="flex items-center gap-2 text-gray-300">
            <StarIcon className="w-5 h-5 text-primary fill-primary" />
            {show.movie.vote_average.toFixed(1)} User Rating
          </div>

          <p className="text-gray-400 mt-2 text-sm leading-tight max-w-xl">
            {show.movie.overview}
          </p>

          <p className="text-gray-400">
            {timeFormat(show.movie.runtime)} -{' '}
            {show.movie.genres?.map(genre => genre.name).join(', ')} -{' '}
            {show.movie.release_date?.split('-')[0]}
          </p>

          <div className='flex items-center flex-wrap gap-4 mt-4'>
            <button className='flex items-center gap-2 px-7 py-3 text-sm 
             bg-gray-800 hover:bg-gray-900 transition rounded-md font-medium
             cursor-pointer active:scale-95'>
              <PlayCircleIcon className='w-5 h-5'/>
              Watch Trailer </button>

            <a href="#dateSelect" className='px-10 py-3 text-sm bg-blue-600
            hover:bg-red-400 transition rounded-md font-medium cursor-pointer
            active:scale-95'>Buy Tickets </a>
            <button className={`w-5 h-5`}>
              <Heart className={`w-5 h-5`}/>
            </button>
          </div>
        </div>
      </div>

      <p className='text-lg font-medium mt-20'>Your Favourite Actors</p>
        <div
         className='overflow-x-auto no-scrollbar mt-8 pb-4'
           style={{ perspective: 1000 }}
           ref={scrollContainerRef}>
          <div className='flex items-center gap-4 w-max px-4 relative'>
           {show.movie.casts.slice(0, 10).map((cast, index) => (
            <motion.div
             key={index}
              className='flex flex-col items-center text-center'
              whileHover={{ scale: 1.25 }}
              transition={{ type: 'spring', stiffness: 300 }}>
            <img
              src={cast.profile_path}
              alt={cast.name}
            className='rounded-full h-20 md:h-20 aspect-square object-cover cursor-pointer transition-transform duration-300 ease-in-out'
            />
            <p className='text-sm mt-1 cursor-pointer'>{cast.name}</p>
            </motion.div>
            ))}
         </div>
        </div>

        <DateSelect dateTime={show.dateTime} id={id}/>

        <p className='text-lg font-medium mt-20 mb-8'>You May Also Like</p>
        <div className="flex justify-center gap-4 overflow-x-auto">
         {dummyShowsData.slice(0, 4).map((movie, index) => (
         <MovieCard key={index} movie={movie} />
          ))}
        </div>

        <div className='flex justify-center mt-10'>
          <button onClick={() => {navigate('/movies'); scrollTo(0,0)}} className='px-7 py-2 text-sm bg-red-500 hover:bg-primary-dull
          transion rounded-md font-medium cursor-pointer'
          >Show more</button>
        </div>

    </div>
  ) : 
  <Loading/>
}

export default MovieDetails;
