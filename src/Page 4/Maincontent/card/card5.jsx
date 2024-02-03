import { useState } from "react";
import partymember from "../../../../public/Partymember.jpg"

const CardRequestsong = () => {
    return(
       <div className="card bg-base-100 shadow-xl opacity-60">
              <figure><img src={partymember} alt="Partymember" /></figure>
              <div className="card-body">
                <h2 className="card-title">
                  Party member
                  <div className="badge badge-secondary badge-outline">SOON</div>
                </h2>
                <p>สมาชิกและตำแหน่งในกรรมการนักเรียน</p>
                <div className="card-actions justify-end">
                  
                </div>
              </div>
         </div>
    )
}

export default CardRequestsong
