import { faInstagram, faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo2 from "/Logo2.jpg?url"


const Social = () =>{
    return(
        <div > 
        <div className='bg-black grid grid-cols pb-20'>
          <div>
            <div className='mx-auto max-w-3xl grid grid-cols-[25%_70%] ml-10 mt-10 text-white'>
              <div>
                  <div>
                    <img src={Logo2} />
                  </div>
              </div>
              <div className='sm:mt-8'>
                  <div className='text-4xl'>ธีระเศรษฐ์ พิมลวิรัชกุล</div>
                  <div>ผู้สมัครประธานนักเรียน ปีการศึกษา 2567 หมายเลข 3</div>
                  <div className='mt-4 flex gap-3'>
                    <div className='ml-1 flex gap-3 text-4xl'>
                    <a href="https://www.instagram.com/scarlet_marrionante_/" rel="noreferrer" target='_blank'>
                      <FontAwesomeIcon className='hover:scale-125 transition-all' icon={faInstagram}/>
                    </a>
                    <a href="https://www.instagram.com/gilbertlnwza333.airline/" rel="noreferrer" target='_blank'>
                      <FontAwesomeIcon className='hover:scale-125 transition-all' icon={faInstagramSquare}/>
                   </a>
                    
                    </div>                
                  </div>
              </div>


            </div> 

          </div>
        </div>
      </div>
    )
}

export default Social;