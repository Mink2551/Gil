import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { data } from "../../Contents/Rightsections"

const Rightsections = () =>{
    return(
        <div className='max-w-6xl ml-3 mr-3 grid gap-2'>
            <div className='bg-primaryTitle rounded-md p-5'>
              <div className='mb-6 flex flex-col gap-2 ;'>
                <div className='text-primary4 text-3xl font-bold'>{data.Maintitle1}</div>
                <div className='text-primaryAccent text-2xl font-semibold'>{data.Secondtitle1}</div>
                <div className='text-black-200 test-xl font-medium'>{data.content1}</div>
                <div className='mt-6'>
                  <span className='bg-primaryAccent rounded-md text-gray-200 py-3 px-4 transition-all hover:bg-primary4'>
                    <a href="/about">
                       {data.Botton1} 
                      <FontAwesomeIcon className='text-sm ml-2' icon={faArrowRight} />
                    </a>
                  </span>
                </div>
              </div>
            </div>



            <div className=''>
              <div className='bg-primary3 rounded-md p-5'>
                <div className='mb-6 flex flex-col gap-1 ;'>
                  <div className='text-primary4 text-3xl font-bold'>{data.Maintitle2}</div>
                  <div className='text-primaryAccent text-2xl font-semibold'>{data.Secondtitle2}</div>
                  <div className='text-black-200 test-xl font-medium mt-2'>{data.content2}</div>
                  <div className='mt-6'>
                    <span className='bg-primaryAccent rounded-md text-gray-200 py-3 px-4 transition-all hover:bg-primary4'>
                      <a href="/policy">
                        {data.Botton2}
                        <FontAwesomeIcon className='text-sm ml-2' icon={faArrowRight} />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>


            
            <div className=''>
              <div className='bg-primaryTitle rounded-md p-5'>
                <div className='mb-6 flex flex-col gap-1 ;'>
                  <div className='text-primary4 text-3xl font-bold'>{data.Maintitle3}</div>
                  <div className='text-primaryAccent text-2xl font-semibold'>{data.Secondtitle3}</div>
                  <div className='text-black-200 test-xl font-medium mt-2'></div>
                  <div className='mt-1'>
                    <span className='bg-primaryAccent rounded-md text-gray-200 py-3 px-4 transition-all hover:bg-primary4'>
                      <a href="/Workings">
                        {data.Botton3}
                        <FontAwesomeIcon className='text-sm ml-2' icon={faArrowRight} />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
    )
}

export default Rightsections;