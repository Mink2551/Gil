import { useEffect, useState } from 'react'
import './App.css'
import LeftSection from './Page3/LeftSection'
import RightSection from './Page3/RightSection'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




function App() {
   const [sectionIds, setSetionidIds] = useState([]);
   const [navBarItems, setNavbarItems] = useState([]);

   const addSectionIds = (sectionId) => {
    const elementId = document.getElementById(sectionId).id;
    setSetionidIds((prev) => [...new set([...prev, elementId])]);

    const elementTitle = document.getElementById('sectionId').childNodes[0].textContent
    const obj = { title: elementTitle, sectionId: elementId}
    setNavbarItems((prev) => {
      if(prev.findIndex(e=>e.title === obj.title)){
        return [...prev, obj];
      }
      return prev;
    });

   }

  return (
    <div className='bg-primarybg1'>
      <div className='text-white ml-8 pt-1 text-3xl sticky top-6'>
                <a href="/" className='hover:text-gray-400'>
                  <FontAwesomeIcon icon={faArrowLeftLong}/> 
                </a>
      </div>
      <div className=' mx-auto max-w-7xl grid lg:grid-cols-[4fr_6fr] gap-7 '>
        <LeftSection navBarItems={navBarItems}/>
        <RightSection onInitial={addSectionIds}/>       
      </div>
    </div>
      
  )
}

export default App