import './App.css'
import Navbar from './Sections/Navbar'
import Social from './Sections/Social'
import Page2img1 from './Sections/page2img1'
import Persernalinformation from './Sections/Persernalinformation'
import Rightinformation from './Sections/Rightinformation'
import Whyyoubeenhere from './Sections/Whyyoubeenhere'




function App() {
  

  return (
    <div className=''>
       <Navbar />
      <div className='grid xl:grid-cols-[3fr_6fr] '>
        <Page2img1/>
       
        <div>
          <div>         
            <div className='pb-12 bg-primary4 text-4xl'>
              <div className='text-white pt-14 pl-10 font-bold'>
                 รู้จักกับ 3Fahprathanmaa
              </div>
            </div>
          </div>
          <div className='grid xl:grid-cols-[1fr_1fr]'>
            
              <Persernalinformation/>
              <Rightinformation/>
            

          </div>
          
        </div>
        
      </div>
        <Whyyoubeenhere/>
      <Social/>
    </div>
  )
}

export default App
