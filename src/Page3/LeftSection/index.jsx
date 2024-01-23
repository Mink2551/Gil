import { faInstagram, faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LeftSection = () => {
    return(
        <div className=''>
          <div className='sticky top-24  grid grid-rows-[3fr_8fr_3fr] h-96vh'>
            <div className=''>             
              <div className='ml-36 mb-2 font-bold text-4xl text-primary6 mx-5'>3Fahprathanmaa's</div> 
              <div className='ml-36 font-semibold text-xl text-primary8'>Party Policy</div> 
              <div className='ml-36 mt-3 font-extralight text-md text-gray-400 mr-12'>นโยบาย และ สิ่งที่เราจะเปลี่ยนแปลง คือ ความก้าวหน้าในโรงเรียน! เรามาร่วมเป็นส่วนร่วมในการช่วยกันพัฒนาโรงเรียนของเราให้ดีขึ้นกัน</div>
            </div>
            <div className='ml-36 mr-14 mb-14 mt-14 flex flex-col gap-5 text-white'>
              <div>ฝ่ายกิจการนักเรียน</div> 
              <div>ฝ่ายวิชาการ</div> 
              <div>ฝ่ายกีฬาและนันทนาการ</div> 
              <div>ฝ่ายสิ่งแวดล้อม</div> 
              <div>ฝ่ายเทคโนโลยี และ สาระสนเทศ</div> 
            </div>
            <div className='grid text-white ml-36 grid-item-end'>              
              <div className='mt-24 flex gap-3 '>
                    <div className='ml-1 flex gap-3 text-4xl'>
                    <a href="https://www.instagram.com/scarlet_marrionante_/" target='_blank'>
                      <FontAwesomeIcon className='hover:scale-125 transition-all' icon={faInstagram}/>
                    </a>
                    <a href="https://www.instagram.com/gilbertlnwza333.airline/" target='_blank'>
                      <FontAwesomeIcon className='hover:scale-125 transition-all' icon={faInstagramSquare}/>
                   </a>
                      <div className="text-sm text-gray-600 mt-2">
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