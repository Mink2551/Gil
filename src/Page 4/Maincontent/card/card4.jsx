import { useState } from "react";
import Gallery from "../../../../public/Gallery.jpg"

const CardGallery = () => {
    return(
       <div className="card bg-base-100 shadow-xl opacity-60">
              <figure><img src={Gallery} alt="Gallery" /></figure>
              <div className="card-body">
                <h2 className="card-title">
                  Gallery
                  <div className="badge badge-secondary badge-outline">SOON</div>
                </h2>
                <p>รูปภาพการทำงานของสภานักเรียน</p>
                <div className="card-actions justify-end">
                  
                </div>
              </div>
         </div>
    )
}

export default CardGallery
