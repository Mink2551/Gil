import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Social from "../../Sections/Social"
import { data } from "../../Contents/Announce.js"
import Announce1 from "../../../public/Announce1.jpg"



function App() {
  

  return (
    <div className='mx-auto'>
         <div className="flex">
          <div className='text-primarybg1 ml-8 pt-6 text-3xl '>
                   <a href="/Workings" className='hover:text-gray-400'>
                     <FontAwesomeIcon icon={faArrowLeft}/> 
                   </a>
           </div>      
         </div>
         <div class="text-center py-10">
            <h1 class="text-5xl font-bold text-gray-800">Announce</h1>
            <p class="mt-4 text-lg text-gray-600">ประกาศต่างๆจากประธานนักเรียนและฝ่ายแต่ละฝ่าย</p>
          </div>
          <div class="max-w-2xl mx-auto mt-10">
    
    <div class="bg-white rounded-lg shadow-md mb-6 p-4 mx-3">
      <div class="flex items-center mb-4">
        <div>
          <div class="font-semibold text-2xl">{data.Maintitle1}</div>
          <div class="text-gray-600 text-sm">{data.Date1}</div>
        </div>
      </div>
      <div class="mb-4">
        <p class="text-lg">{data.Caption1}</p>
        <img src={Announce1} alt="Announce1" class="mt-2"/>
      </div>
    </div>

    <div class="bg-white rounded-lg shadow-md mb-6 p-4 mx-3">
      <div class="flex items-center mb-4">
        <div>
          <div class="font-semibold text-2xl">{data.Maintitle2}</div>
          <div class="text-gray-600 text-sm">{data.Date2}</div>
        </div>
      </div>
      <div class="mb-4">
        <p class="text-lg">{data.Caption2} <a href="https://docs.google.com/forms/d/e/1FAIpQLSc7jdzYKqD4XE3TJNK8ezs8PUrVHTucupFVXGH0YBi-TVONkw/viewform" className="text-blue-400 text-lg">View here</a></p>
       
      </div>
    </div>

    <div class="bg-white rounded-lg shadow-md mb-6 p-4 mx-3">
      <div class="flex items-center mb-4">
        <div>
          <div class="font-semibold text-2xl">{data.Maintitle3}</div>
          <div class="text-gray-600 text-sm">{data.Date3}</div>
        </div>
      </div>
      <div class="mb-4">
        <p class="text-lg">{data.Caption3} <a href="https://docs.google.com/forms/d/e/1FAIpQLSfMNqm5_gr_mfl21kVjljR142aev1Ypu8NUqI3FFGye8MCVMA/viewform?usp=sf_link" className="text-blue-400">View here</a></p>
        
      </div>
    </div>
    
    <div class="bg-white rounded-lg shadow-md mb-6 p-4 mx-3">
      <div class="flex items-center mb-4">
        <div>
          <div class="font-semibold text-2xl">{data.Maintitle4}</div>
          <div class="text-gray-600 text-sm">{data.Date4}</div>
        </div>
      </div>
      <div class="mb-4">
        <p class="text-lg">{data.Caption4} <a href="https://docs.google.com/forms/d/e/1FAIpQLSfXqXy-ZKthmJ8-bI-S5cMeep0pQ5We_t9febk9j5SxPFF94A/viewform?usp=sf_link" className="text-blue-400">View here</a></p>
        
      </div>
    </div>
    
    {/* <div class="bg-white rounded-lg shadow-md mb-6 p-4">
      <div class="flex items-center mb-4">
        <img src="https://via.placeholder.com/40" alt="User Avatar" class="w-10 h-10 rounded-full mr-2"/>
        <div>
          <div class="font-semibold">Jane Smith</div>
          <div class="text-gray-600 text-sm">1 day ago</div>
        </div>
      </div>
      <div class="mb-4">
        <p class="text-lg">Another sample post here!</p>
        <p class="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div class="flex items-center">
        <button class="text-blue-500 hover:text-blue-600 focus:outline-none focus:ring focus:border-blue-300">Like</button>
        <button class="text-gray-500 hover:text-gray-600 ml-4 focus:outline-none focus:ring focus:border-blue-300">Comment</button>
      </div>
    </div> */}
  </div>



         <Social/>
    </div>
  )
}

export default App
