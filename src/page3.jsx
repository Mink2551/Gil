import './App.css'
import Navbar from './Sections/Navbar'



function App() {
  

  return (
    <div>
      <Navbar/>
      <div className='max-w-7xl mx-auto grid grid-cols-[4fr_6fr]'>
        <div className='grid grid-rows-[5%_10%_5%_5%_5%_5%_5%_60%] h-screen'>
        <div className='sticky top-24'>
            <div>นโยบาย ของพรรค</div> 
            <div>3Fahprathanmaa</div> 
            <div>ฝ่ายกิจการ</div> 
            <div>ฝ่ายวิชาการ</div> 
            <div>ฝ่ายพละ</div> 
            <div>ฝ่ายสิ่งแวดล้อม</div> 
            <div>ฝ่ายเทคโน</div> 
            <div>textsomething</div>
          </div> 
        </div>
        <div>
          <div className='mb-96'>test</div>
          <div className='mb-96'>test</div>
          <div className='mb-96'>test</div>
          <div className='mb-96'>test</div>
          <div className='mb-96'>test</div>
          <div className='mb-96'>test</div>
        </div>

      </div>
      
    </div>
  )
}

export default App