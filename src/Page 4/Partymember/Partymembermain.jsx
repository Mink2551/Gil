import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Social from "../../Sections/Social";
import Partymembertable from "./Partymembertable";

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
        <div className=" max-w-7xl mx-auto my-10 ">
              <div role="tablist" className="tabs tabs-bordered">
                <a href="/partymembermain" role="tab" className="tab tab-active">Table</a>
                <a href="#" role="tab" className="tab ">Tree</a>
              </div>
        </div>
        <Partymembertable/>
        
         <Social/>
      </div>

    )
  }
  
  export default App