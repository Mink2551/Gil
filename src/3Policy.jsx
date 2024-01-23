import { useEffect } from 'react'
import './App.css'
import LeftSection from './Page3/LeftSection'
import RightSection from './Page3/RightSection'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




function App() {
  return (
    <div className='bg-primarybg2'>
      <div className='text-white ml-8 pt-1 text-3xl sticky top-6'>
                <a href="/" className='hover:text-gray-400'>
                  <FontAwesomeIcon icon={faArrowLeftLong}/> 
                </a>
      </div>
      <div className=' mx-auto max-w-7xl grid lg:grid-cols-[4fr_6fr] gap-14 '>
        <LeftSection/>
        <RightSection/>       
      </div>
    </div>
      
  )
}

export default App