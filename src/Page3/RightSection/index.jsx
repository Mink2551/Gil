const RightSection = () => {
    return(
        <div className='mr-24 mt-20 ml-16 gird  text-white'>
          <div className="mb-96 grid gap-5 m-5">
             <div className="" >ฝ่ายกิจการนักเรียน</div>
             <div className="grid grid-cols-[3fr_7fr]">
                <div>
                  Picture
                </div>
                <div>
                  <div>main</div>
                  <div>detail</div>
                  <div>type</div>
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