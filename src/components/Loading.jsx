import React from 'react'

function Loading() {
  return (
    <div className='flex justify-center items-center h-[80vh]'>
      <div className='animate-spin rounded-full h-14 w-14 border-3
      border-t-sky-600'>
      </div>
    </div>
  )
}

export default Loading
