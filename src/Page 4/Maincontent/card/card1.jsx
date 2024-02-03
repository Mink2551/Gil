import { useState } from "react";
import timeline from "../../../../public/timeline.jpg"

const Cardtimeline = () => {

  const [isMouseEnter, setIsMouseEnter] = useState({});

    return(
       <div className=
          "card bg-base-100 shadow-xl"
          onMouseEnter={() => setIsMouseEnter({ ['card1']: true})}
          onMouseLeave={() => setIsMouseEnter({ ['card1']: false})}
       >
        
              <figure ><img  src={timeline} alt="timeline" /></figure>
              <div className="card-body ">
                <h2 className={`card-title ${isMouseEnter['card1']? "text-blue-800" : ""}`}>
                  Timeline
                  <div className={`badge ${isMouseEnter['card1']? "badge-outline" : ""} badge-secondary`}>NEW</div>
                </h2>
                <p className={`${isMouseEnter['card1']? "text-blue-600" : ""}`}>Timeline และเรื่องราวของ Gilbert / 3Fahprathanmaa ประธานนักเรียนประจำปีการศึกษา 2567 </p>
                <div className="card-actions justify-end">
                  <a href="/timeline" className={`hover:text-blue-600 badge hover:scale-110 badge-outline lg:${isMouseEnter['card1']? "" : "opacity-0"}`}>View</a>                   
                </div>
              </div>
         </div>
    )
}

export default Cardtimeline
