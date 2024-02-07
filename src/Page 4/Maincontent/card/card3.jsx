import { useState } from "react";
import Announce from "../../../../public/Announce.jpg"

const CardPost = () => {

  const [isMouseEnter, setIsMouseEnter] = useState({});

    return(
      <div className=
      "card bg-base-100 shadow-xl"
      onMouseEnter={() => setIsMouseEnter({ ['card1']: true})}
      onMouseLeave={() => setIsMouseEnter({ ['card1']: false})}
   >
    
          <figure ><img src={Announce} alt="Carlendar" /></figure>
          <div className={`card-body transition-all ${isMouseEnter['card1']? "scale-105" : ""}`}>
            <h2 className={`card-title ${isMouseEnter['card1']? "text-blue-800" : ""}`}>
              Announce
              <div className={`badge ${isMouseEnter['card1']? "badge-outline" : ""} badge-secondary`}>NEW</div>
            </h2>
            <p className={`${isMouseEnter['card1']? "text-blue-600" : ""}`}>ประกาศต่างๆจากประธานนักเรียนและฝ่ายแต่ละฝ่าย</p>
            <div className="card-actions justify-end">
              <a href="/announcemain" className={`hover:text-blue-600 badge hover:scale-110 badge-outline lg:${isMouseEnter['card1']? "" : "opacity-0"}`}>View</a>                   
            </div>
          </div>
     </div>
    )
}

export default CardPost
