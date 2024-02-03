import { useState } from "react";
import Carlendar from "../../../../public/Calendar.jpg"

const cardKidjakramCalendar = () => {
    return(
       <div className="card bg-base-100 shadow-xl opacity-60">
              <figure><img src={Carlendar} alt="Carlendar" /></figure>
              <div className="card-body">
                <h2 className="card-title">
                  Carlendar
                  <div className="badge badge-secondary badge-outline">SOON</div>
                </h2>
                <p>ตาราง ปฏิทิน กิจกรรมและอีเว้นใน โรงเรียน</p>
                <div className="card-actions justify-end">
                  
                </div>
              </div>
         </div>
    )
}

export default cardKidjakramCalendar
