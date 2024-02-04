import { faArrowCircleDown, faArrowDown, faArrowLeft, faArrowUp, faHome } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Toping from "./Toping"
import Social from "../../Sections/Social"
import { useState } from "react";
import Carlendarmonths from "./Carlendarmonths2567";
import Carlendar from "./Carlendar";

function App() {

  const [isMouseEnter, setIsMouseEnter] = useState({});
  

    return (
      <div className="bg-gray-200" >
        
       <div className="flex">
          <div className='text-primarybg1 ml-8 pt-6 text-3xl '>
                   <a href="/Workings" className='hover:text-gray-400'>
                     <FontAwesomeIcon icon={faArrowLeft}/> 
                   </a>
           </div>
           
        </div>
        <div className="max-w-7xl mx-auto lg:size-1/3 size-2/3 to">
          <Toping/>
          </div>
            <div className=" max-w-7xl mx-auto mt-10 ">
              <div role="tablist" className="tabs tabs-bordered">
                <a href="#" role="tab" className="tab tab-active">DMY. Time</a>
                <a href="#" role="tab" className="tab ">Carlendar</a>
                <a href="#" role="tab" className="tab">Content</a>
              </div>
            </div>
            <div className="mx-auto my-8 p-4 text-4xl font-bold text-center">
              Day Months Year Time for carlendar
            </div>
            <div 
            onMouseEnter={() => setIsMouseEnter({ ['crd1']: true})}
            onMouseLeave={() => setIsMouseEnter({ ['crd1']: false})}
            class={`container mx-auto mb-10 my-8 p-4 bg-white shadow-lg text-4xl font-bold text-center  transition-all ${isMouseEnter['crd1']? "" : "opacity-100 scale-100"}`}>
              <p>2567
                <FontAwesomeIcon className={`transition-all ${isMouseEnter['crd1']? "ml-2 scale-75" : "ml-2 scale-50" }`} icon={faArrowCircleDown}/>
              </p>
            </div>
            <div 
             onMouseEnter={() => setIsMouseEnter({ ['crd2']: true})}
             onMouseLeave={() => setIsMouseEnter({ ['crd2']: false})}
             class={`container mx-auto mb-10 my-8 p-4 bg-white shadow-lg text-4xl font-bold text-center opacity-60 scale-95 transition-all ${isMouseEnter['crd2']? "opacity-100 scale-100" : ""}`}>
              <p>2568</p>
            </div>

            <Carlendarmonths/>

            <Carlendar/>

            


          <Social/>
      </div>

    )
  }
  
  export default App