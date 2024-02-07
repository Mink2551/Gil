import './App.css'
import Header from './Sections/header'
import Navbar from './Sections/Navbar'
import Social from './Sections/Social'
import Rightsections from './Sections/Rightsections/Rightsections'




function Home() {
  

  return (
    <div>
       <Navbar/>
      <div className='mx-auto grid 2xl:grid-cols-[70%_30%]'>         
           <Header />       
           <Rightsections />
      </div>

      <Social/>
    </div>
  )
}

export default Home