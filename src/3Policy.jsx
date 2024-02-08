import { useEffect, useState } from 'react'
import './App.css'
import LeftSection from './Page3/LeftSection'
import RightSection from './Page3/RightSection'
import { faArrowLeftLong, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




function App() {
   
  return (
    <div className='bg-primarybg1'>
      <div className='text-white ml-8 pt-1 text-2xl sticky top-6'>
                <a href="/" className='hover:text-gray-400'>
                  <FontAwesomeIcon icon={faHome}/> 
                </a>
      </div>
      <div className=' mx-auto max-w-7xl grid lg:grid-cols-[4fr_6fr] mt-10 gap-7 '>
        <LeftSection/>
        <RightSection/>       
      </div>
    </div>
      
  )
}

export default App