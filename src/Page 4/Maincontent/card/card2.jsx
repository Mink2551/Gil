import { useState } from "react";
import Carlendar from "../../../../public/Calendar.jpg"

const cardKidjakramCalendar = () => {

  const [isMouseEnter, setIsMouseEnter] = useState({});

  return(
    <div className=
       "card bg-base-100 shadow-xl"
       onMouseEnter={() => setIsMouseEnter({ ['card1']: true})}
       onMouseLeave={() => setIsMouseEnter({ ['card1']: false})}
    >
     
           <figure ><img src={Carlendar} alt="Carlendar" /></figure>
           <div className={`card-body transition-all ${isMouseEnter['card1']? "scale-105" : ""}`}>
             <h2 className={`card-title ${isMouseEnter['card1']? "text-blue-800" : ""}`}>
               KidjakarnCarlendar
               <div className={`badge ${isMouseEnter['card1']? "badge-outline" : ""} badge-secondary`}>NEW</div>
             </h2>
             <p className={`${isMouseEnter['card1']? "text-blue-600" : ""}`}>ตาราง ปฏิทิน กิจกรรมและอีเว้นใน โรงเรียน </p>
             <div className="card-actions justify-end">
               <a href="/carlendarmain" className={`hover:text-blue-600 badge hover:scale-110 badge-outline lg:${isMouseEnter['card1']? "" : "opacity-0"}`}>View</a>                   
             </div>
           </div>
      </div>
 )
}

export default cardKidjakramCalendar
