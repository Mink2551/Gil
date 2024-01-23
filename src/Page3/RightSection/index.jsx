import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RightSection = () => {
    return(
        <div className='mr-24 mt-4 ml-16 gird  text-white'>
          <div className="mb-96 grid gap-10 m-5">
             <div className="text-gray-600" >ฝ่ายกิจการนักเรียน</div>
             <div className="grid grid-cols-[3fr_7fr]">
                <div>
                  Picture
                </div>
                <div className="grid gap-5">
                  <div className="font-medium text-xl">SaphaPM</div>
                  <div className="text-sm text-gray-400">·ให้มีการประชุมระหว่างคณะกรรมการนักเรียนกับหัวหน้าห้องทุกระดับชั้น 1 เดือน 1 ครั้ง เพื่อแก้ไขปัญหาในโรงเรียนทียังมีอยู่</div>
                  <div>
                    <a href=""><FontAwesomeIcon icon={faArrowUpRightFromSquare}/>  อ่านข้อมูลเพิ่มเติม</a>
                  </div>
                </div>
                
             </div>
               

          </div>
          

          <div className="mb-96">
             <div>ฝ่ายวิชาการ</div>  

          </div>
          

          <div className="mb-96">
            <div>ฝ่ายกีฬาและนันทนาการ</div>

          </div>
          

          <div className="mb-96">
            <div>ฝ่ายสิ่งแวดล้อม</div>

          </div>
          
          
          <div className="mb-96">
            <div>ฝ่ายเทคโนโลยี และ สาระสนเทศ</div>
            
          </div>
        </div>

    )
}

export default RightSection;