import { useState } from "react";
import Announce from "../../../../public/Announce.jpg"

const CardPost = () => {
    return(
       <div className="card bg-base-100 shadow-xl opacity-60">
              <figure><img src={Announce} alt="Announce" /></figure>
              <div className="card-body">
                <h2 className="card-title">
                  Announce
                  <div className="badge badge-secondary badge-outline">SOON</div>
                </h2>
                <p>ประกาศต่างๆจากประธานนักเรียนและฝ่ายแต่ละฝ่าย</p>
                <div className="card-actions justify-end">
                 
                </div>
              </div>
         </div>
    )
}

export default CardPost
