import { useState } from "react";
import Comment from "../../../../public/Comment.jpg"

const CardComment = () => {
    return(
       <div className="card bg-base-100 shadow-xl opacity-60">
              <figure><img src={Comment} alt="Comment" /></figure>
              <div className="card-body">
                <h2 className="card-title">
                  Comment
                  <div className="badge badge-secondary badge-outline">SOON</div>
                </h2>
                <p>อยากติดต่อหรือแสดงความคิดเห็นอะไรทิ้งไว้ที่นี้ได้เลย</p>
                <div className="card-actions justify-end">
                  
                </div>
              </div>
         </div>
    )
}

export default CardComment
