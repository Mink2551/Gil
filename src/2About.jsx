import './App.css'
import Navbar from './Sections/Navbar'
import Social from './Sections/Social'
import Page2img1 from './Sections/page2img1'
import Persernalinformation from './Sections/Persernalinformation'
import Rightinformation from './Sections/Rightinformation'
import Whyyoubeenhere from './Sections/Whyyoubeenhere'




function App() {
  

  return (
    <div>
       <Navbar />
      <div className='grid 2xl:grid-cols-[3fr_3fr_3fr] '>
        <Page2img1/>
        <Persernalinformation/>
        <Rightinformation/>
      </div>
        <Whyyoubeenhere/>
      <Social/>
    </div>
  )
}

export default App
