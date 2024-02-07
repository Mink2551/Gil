import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Timeline1 from "./Timeline1"
import Social from "../../Sections/Social"

function App() {
  

    return (
      <div className="" >
        <div className='text-primarybg1 ml-8 pt-1 text-3xl mt-5'>
                <a href="/Workings" className='hover:text-gray-400'>
                  <FontAwesomeIcon icon={faArrowLeft}/> 
                </a>
        </div>
        <div className=" max-w-7xl mx-auto ">
          <div role="tablist" className="tabs tabs-bordered">
            <a href="/timeline" role="tab" className="tab tab-active">Timeline</a>
            <a href="/timelinepicture" role="tab" className="tab ">Picture</a>
            <a href="/timelineboth" role="tab" className="tab">Both</a>
          </div>
        </div>
        <Timeline1/>
        <Social/>
        
      </div>
    )
  }
  
  export default App