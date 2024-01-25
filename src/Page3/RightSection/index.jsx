import Policy1 from "./Policy/กิจการนักเรียน";
import Policy2 from "./Policy/วิชาการ";

const RightSection = () => {
    return(
        <div className='mr-24 mt-16 ml-16 gird  text-white'>
           <Policy1/>
          

         
           <Policy2/>  

          
          

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