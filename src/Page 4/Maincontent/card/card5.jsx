import { useState } from "react";
import partymember from "../../../../public/Partymember.jpg"

const CardRequestsong = () => {

  const [isMouseEnter, setIsMouseEnter] = useState({});

    return(
      <div className=
      "card bg-base-100 shadow-xl"
      onMouseEnter={() => setIsMouseEnter({ ['card1']: true})}
      onMouseLeave={() => setIsMouseEnter({ ['card1']: false})}
   >
    
          <figure ><img src={partymember} alt="partymember" /></figure>
          <div className={`card-body transition-all ${isMouseEnter['card1']? "scale-105" : ""}`}>
            <h2 className={`card-title ${isMouseEnter['card1']? "text-blue-800" : ""}`}>
              Party member
              <div className={`badge ${isMouseEnter['card1']? "badge-outline" : ""} badge-secondary`}>NEW</div>
            </h2>
            <p className={`${isMouseEnter['card1']? "text-blue-600" : ""}`}>สมาชิกและตำแหน่งในกรรมการนักเรียน </p>
            <div className="card-actions justify-end">
              <a href="/partymembermain" className={`hover:text-blue-600 badge hover:scale-110 badge-outline lg:${isMouseEnter['card1']? "" : "opacity-0"}`}>View</a>                   
            </div>
          </div>
     </div>
    )
}

export default CardRequestsong
