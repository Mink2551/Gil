const Rightinformation = () => {
    return(
        <div>
          <div className='grid ml-5 mr-5 '>
            <div className='mt-7 ml-7 mb-5 font-bold text-3xl text-primary4'>ประวัติการศึกษา</div>
              <div className='grid sm:grid-cols-[2fr_5fr_3fr]'>               
                 
                   <div  className='font-extralight text-gray-600'>ประถมศึกษา :</div>
                   
                   
                   <div  className='font-extralight text-gray-600'>โรงเรียนแสงโสม</div>

                   <div>เกรดเฉลี่ย : 3.88</div>
 
                   <div  className='font-extralight text-gray-600'>มัธยมศึกษา :</div>
                   
                   <div  className='font-extralight text-gray-600'>โรงเรียนสาธิตวัดพระศรีมหาธาตุ มหาวิทยาลัยราชภัฏพระนคร </div>

                 
                   <div>เกรดเฉลี่ย : 3.84</div>

                 
              </div>
            <div className='mt-14 ml-7 mb-5 font-bold text-3xl text-primary4'>ผลงาน</div>
              <div className='font-extralight text-xl text-gray-600 grid gap-3'>
                <li>หัวหน้าห้องชั้น ม.1/4 , 2/1 , 3/1 และ 4/3</li>
                <li>ได้รับรางวัลนักเรียนดีเด่น ปีการศึกษา 2565</li>
                <li>เป็นสตาฟหลักของพาเหรดตอน ม.4/3</li>
              </div>
          </div>
        </div>
    )
}

export default Rightinformation;