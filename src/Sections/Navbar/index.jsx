import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () =>{
    return(
        <div className='mx-auto grid sticky top-0'>
        <div className='bg-blue-400 shadow-xl'>
          <div >
            <div className=' mx-auto flex flex-cols-[40%_60%] ml-5 p-3 pt-5 pb-5 gap-9  '>
              <div>
                <a href="/" className='text-blue-900 hover:text-gray-200 transition-all'>
                  <FontAwesomeIcon className='scale-150' icon={faHome}/>
                </a>
              </div>              
              <div className='flex gap-5 font-bold mt-0.5 ml-7 '>
                <a href="/about">
                  <div className='text-blue-900 hover:text-gray-200 transition-all'>เกี่ยวกับ</div>
                </a>
                <a href="/policy">
                  <div className='text-blue-900 hover:text-gray-200 transition-all'>นโยบาย</div>
                </a>
                <a href="/workings">
                  <div className='text-blue-900 hover:text-gray-200 transition-all'>ผลงาน</div>
                </a>
                <a href="/announcemain">
                  <div className='text-blue-800 hover:text-gray-200 transition-all'>ประกาศ</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Navbar;