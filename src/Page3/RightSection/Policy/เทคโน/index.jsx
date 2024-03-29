import podcast from "../../../../../public/26.png"
import website from "../../../../../public/27.png"
import { data } from "../../../../Contents/Policy5.js"
import { useState } from "react";

const Policy5 = () => {
    const [isMouseEnter, setIsMouseEnter] = useState({});

    return(
        <div className="mb-56 grid m-5 mt-8 ">
            <div className="text-gray-200 mb-16  grid gap-7 scroll-m-36" id="ฝ่ายเทคโนโลยี และ สาระสนเทศ-section">ฝ่ายเทคโนโลยี และ สาระสนเทศ</div>
           
             <div 
                  className={`grid grid-cols-[3fr_7fr] transition-all ${isMouseEnter['policy1']? "bg-primary10 bg-opacity-20" : ""} rounded-xl py-6`}
                  onMouseEnter={() => setIsMouseEnter({ ['policy1']: true})}
                  onMouseLeave={() => setIsMouseEnter({ ['policy1']: false})}
             >
                <div>
                  <img className=' mx-auto my grid rounded-md mt-4' src={podcast} />
                </div>
                <div className="grid gap-5">
                  <div className={`font-medium ${isMouseEnter['policy1']? "text-primary11" : ""} text-xl`}> {data.Main1} </div>
                  <div className="text-sm text-gray-400"> {data.Content1}</div>
                  <div className="flex gap-4 text-sm">
                      <div className={`bg-gray-600 px-2 py-1 my-auto bg-opacity-80 rounded-md text-gray-400 ${isMouseEnter[`policy1`]? "text-primary11" : ""}`}>ฝ่ายเทคโนโลยี และ สาระสนเทศ</div>
                      <div className={`bg-gray-600 px-2 py-1 my-auto bg-opacity-80 rounded-md text-gray-400 ${isMouseEnter[`policy1`]? "text-primary11" : ""}`}>เนื้อหาต่อเนื่อง</div>                      
                  </div>
                </div>                
             </div> 

             <div 
                  className={`grid grid-cols-[3fr_7fr] transition-all ${isMouseEnter['policy2']? "bg-primary10 bg-opacity-20" : ""} rounded-xl py-6`}
                  onMouseEnter={() => setIsMouseEnter({ ['policy2']: true})}
                  onMouseLeave={() => setIsMouseEnter({ ['policy2']: false})}
             >
                <div>
                  <img className=' mx-auto my grid rounded-md opacity-80' src={website} />
                </div>
                <div className="grid gap-5">
                  <div className={`font-medium ${isMouseEnter['policy2']? "text-primary11" : ""} text-xl`}> {data.Main2} </div>
                  <div className="text-sm text-gray-400"> {data.Content2}</div>
                  <div className="flex gap-4 text-sm">
                      <div className={`bg-gray-600 px-2 py-1 my-auto bg-opacity-80 rounded-md text-gray-400  ${isMouseEnter[`policy2`]? "text-primary11" : ""}`}>ฝ่ายเทคโนโลยี และ สาระสนเทศ</div>
                      <div className={`bg-gray-600 px-2 py-1 my-auto bg-opacity-80 rounded-md text-gray-400  ${isMouseEnter[`policy2`]? "text-primary11" : ""}`}>เนื้อหาต่อเนื่อง</div>
                  </div>
                </div>                
             </div> 

           </div>
    )
}

export default Policy5;