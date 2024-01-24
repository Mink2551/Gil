import Gil3 from '/Gil3.jpg?url'

const Whyyoubeenhere = () => {
    return(
        <div className='grid 2xl:grid-cols-[10fr_3fr] m-12'>
        <div className=''>
          <div className='font-bold text-2xl text-primary4'>ทำไมถึงสมัครประธานนักเรียน ?</div>
          <div className= 'mt-4 text-xl font-extralight text-gray-600'>"สำหรับการลงสมัครประธานนักเรียนนะคะ หนูรู้สึกว่าเป็นการทำ Achievement ใหญ่มากๆในชีวิตของหนูเลย หนูอยากมาทำเพื่อเพื่อน เพื่อพ่อแม่ เพื่อพี่น้องชาวพอมอทุกคนๆ อยากมาสานต่อความฝันทุกฝัน นโยบายทุกอัน และก็อยากเป็นที่พึ่งให้สำหรับทุกคนๆค่ะ หนูอยากให้โรงเรียนเปรียบเสมือนเครื่องบินที่พาทุกๆคนไปยังอนาคตที่สดใสกว่าเดิม ที่ทุกคนในโรงเรียนออกแบบมาด้วยกันค่ะ สำหรับตัวหนู หนูมองว่าตัวหนูเองก็หนูมีศักยภาพประมาณนึง แต่ก็อยากพัฒนาตัวหนูเอง พัฒนาโรงเรียน พัฒนาความฝันไปพร้อมๆกันค่ะ"</div>
        </div>
        <div className='w-1/2 mx-auto'>
          <img src={Gil3}/>
        </div>

      </div>
    )
}

export default Whyyoubeenhere;