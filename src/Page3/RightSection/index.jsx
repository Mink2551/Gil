import Policy1 from "./Policy/กิจการนักเรียน";

const RightSection = () => {
    return(
        <div className='mr-24 mt-4 ml-16 gird  text-white'>
           <Policy1/>
          

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