import { faInstagram, faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faArrowLeftLong, faArrowRight, faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navibar from "../Navibar";

const LeftSection = ({ navBarItems }) => {
    return(
        <div className=''>
          <div className='sticky top-24  grid grid-rows-[4fr_6fr_4fr] h-6vh'>
            <div className='mt-10'>             
              <div className='break-all ml-12 mb-2 font-bold text-4xl text-primary6 mx-5'>3Fahprathanmaa's</div> 
              <div className='ml-12 font-semibold text-xl text-primary8'>Party Policy</div> 
              <div className='break-all ml-12 mt-3 font-extralight text-md text-gray-400 mr-12'>นโยบาย และ สิ่งที่เราจะเปลี่ยนแปลง คือ ความก้าวหน้าในโรงเรียน! เรามาร่วมเป็นส่วนร่วมในการช่วยกันพัฒนาโรงเรียนของเราให้ดีขึ้นกัน</div>
            </div>



            <Navibar/>



            <div className='grid text-white ml-12 grid-item-end'>              
              <div className='mt-24 flex gap-3 '>
                    <div className='ml-1 flex gap-3 text-4xl'>
                    <a href="https://www.instagram.com/scarlet_marrionante_/" target='_blank'>
                      <FontAwesomeIcon className='hover:scale-125 mt-4 transition-all' icon={faInstagram}/>
                    </a>
                    <a href="https://www.instagram.com/gilbertlnwza333.airline/" target='_blank'>
                      <FontAwesomeIcon className='hover:scale-125 mt-4 transition-all' icon={faInstagramSquare}/>
                   </a>
                      <div className="break-all text-sm text-gray-600 mt-7 flex">
                        inspiration from <a className="hover:text-gray-400 " target='_blank' href="https://blackboy96.xyz/">"https://blackboy96.xyz/"</a>
                      </div>
                    </div>                
               </div>            
            </div>
            
            
            
          </div> 
        </div>
    )
}

export default LeftSection;