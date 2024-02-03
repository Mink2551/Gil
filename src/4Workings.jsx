import { faHome } from '@fortawesome/free-solid-svg-icons'
import './App.css'
import Maincontent from './Page 4/Maincontent/Maincontent'
import Social from './Sections/Social'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function App() {
  

  return (
    <div className='bg-gray-200'>
      <div className='text-primarybg1 ml-8 pt-1 text-2xl sticky top-6'>
                <a href="/" className='hover:text-gray-400'>
                  <FontAwesomeIcon icon={faHome}/> 
                </a>
      </div>
      <div className='m-10 mt-10 max-w-7xl mx-auto '>
        <div className='sm:flex'>
           <div className='ml-10 font-bold text-5xl text-primary4'>ผลงาน</div>
           <div className='ml-5 text-2xl mt-4 text-primary6 font-semibold'>ของพรรค 3Fahprathanmaa</div>
        </div> 
        <Maincontent/>
      </div>     
      <Social/>

    </div>
  )
}

export default App