import tiktok from "../../../../../public/12.png"
import sheet from "../../../../../public/13.png"
import PMTT from "../../../../../public/14.png"
import wth from "../../../../../public/15.png"
import jitasa from "../../../../../public/16.png"
import pride from "../../../../../public/17.png"
import oph from "../../../../../public/18.png"
import rahad from "../../../../../public/19.png"
import { data } from "../../../../Contents/Policy2"
import { useState } from "react";

const Policy2 = () => {
    const [isMouseEnter, setIsMouseEnter] = useState({});

    return(
        <div className="mb-56 grid m-5 mt-8 ">
            <div className="text-gray-200 mb-16  grid gap-7 scroll-m-36"   id="ฝ่ายวิชาการ-section" >ฝ่ายวิชาการ</div>
           
             <div 
                  className={`grid grid-cols-[3fr_7fr] transition-all ${isMouseEnter['policy1']? "bg-primary10 bg-opacity-20" : ""} rounded-xl py-6`}
                  onMouseEnter={() => setIsMouseEnter({ ['policy1']: true})}
                  onMouseLeave={() => setIsMouseEnter({ ['policy1']: false})}
             >
                <div>
                  <img className=' mx-auto my grid rounded-md opacity-80' src={tiktok} />
                </div>
                <div className="grid gap-5">
                  <div className={`font-medium ${isMouseEnter['policy1']? "text-primary11" : ""} text-xl`}> {data.Main1} </div>
                  <div className="text-sm text-gray-400"> {data.Content1}</div>
                  <div className="flex gap-4 text-sm">
                      <div className={`bg-gray-600 px-2 py-1 my-auto bg-opacity-80 rounded-md text-gray-400 ${isMouseEnter[`policy1`]? "text-primary11" : ""}`}>วิชาการ</div>
                      <div className={`bg-gray-600 px-2 py-1 my-auto bg-opacity-80 rounded-md text-gray-400 ${isMouseEnter[`policy1`]? "text-primary11" : ""}`}>นโยบายหลัก</div>
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
                  <img className=' mx-auto my grid rounded-md opacity-80' src={sheet} />
                </div>
                <div className="grid gap-5">
                  <div className={`font-medium ${isMouseEnter['policy2']? "text-primary11" : ""} text-xl`}> {data.Main2} </div>
                  <div className="text-sm text-gray-400"> {data.Content2}</div>
                  <div className="flex gap-4 text-sm">
                      <div className={`bg-gray-600 px-2 py-1 my-auto bg-opacity-80 rounded-md text-gray-400  ${isMouseEnter[`policy2`]? "text-primary11" : ""}`}>วิชาการ</div>
                      <div className={`bg-gray-600 px-2 py-1 my-auto bg-opacity-80 rounded-md text-gray-400  ${isMouseEnter[`policy2`]? "text-primary11" : ""}`}>กฎและการเปลี่ยนแปลง</div>
                  </div>
                </div>                
             </div> 

             <div 
                  className={`grid grid-cols-[3fr_7fr] transition-all ${isMouseEnter['policy3']? "bg-primary10 bg-opacity-20" : ""} rounded-xl py-6`}
                  onMouseEnter={() => setIsMouseEnter({ ['policy3']: true})}
                  onMouseLeave={() => setIsMouseEnter({ ['policy3']: false})}
             >
                <div>
                  <img className=' mx-auto my grid rounded-md opacity-80' src={PMTT} />
                </div>
                <div className="grid gap-5">
                  <div className={`font-medium ${isMouseEnter['policy3']? "text-primary11" : ""} text-xl`}> {data.Main3} </div>
                  <div className="text-sm text-gray-400"> {data.Content3}</div>
                  <div className="flex gap-4 text-sm">
                      <div className={`bg-gray-600 px-2 py-1 my-auto bg-opacity-80 rounded-md text-gray-400  ${isMouseEnter[`policy3`]? "text-primary11" : ""}`}>วิชาการ</div>
                      <div className={`bg-gray-600 px-2 py-1 my-auto bg-opacity-80 rounded-md text-gray-400  ${isMouseEnter[`policy3`]? "text-primary11" : ""}`}>กิจกรรม</div>
                  </div>
                </div>                
             </div> 

             <div 
                  className={`grid grid-cols-[3fr_7fr] transition-all ${isMouseEnter['policy4']? "bg-primary10 bg-opacity-20" : ""} rounded-xl py-6`}
                  onMouseEnter={() => setIsMouseEnter({ ['policy4']: true})}
                  onMouseLeave={() => setIsMouseEnter({ ['policy4']: false})}
             >
                <div>
                  <img className=' mx-auto my grid rounded-md opacity-80' src={wth} />
                </div>
                <div className="grid gap-5">
                  <div className={`font-medium ${isMouseEnter['policy4']? "text-primary11" : ""} text-xl`}> {data.Main4} </div>
                  <div className="text-sm text-gray-400"> {data.Content4}</div>
                  <div className="flex gap-4 text-sm">
                      <div className={`bg-gray-600 px-2 py-1 my-auto bg-opacity-80 rounded-md text-gray-400 ${isMouseEnter[`policy4`]? "text-primary11" : ""}`}>วิชาการ</div>
                      <div className={`bg-gray-600 px-2 py-1 my-auto bg-opacity-80 rounded-md text-gray-400 ${isMouseEnter[`policy4`]? "text-primary11" : ""}`}>กิจกรรม</div>
                  </div>
                </div>                
             </div> 

             <div 
                  className={`grid grid-cols-[3fr_7fr] transition-all ${isMouseEnter['policy5']? "bg-primary10 bg-opacity-20" : ""} rounded-xl py-6`}
                  onMouseEnter={() => setIsMouseEnter({ ['policy5']: true})}
                  onMouseLeave={() => setIsMouseEnter({ ['policy5']: false})}
             >
                <div>
                  <img className=' mx-auto my grid rounded-md opacity-80' src={jitasa} />
                </div>
                <div className="grid gap-5">
                  <div className={`font-medium ${isMouseEnter['policy5']? "text-primary11" : ""} text-xl`}> {data.Main5} </div>
                  <div className="text-sm text-gray-400"> {data.Content5}</div>
                  <div className="flex gap-4 text-sm">
                      <div className={`bg-gray-600 px-2 py-1 my-auto bg-opacity-80 rounded-md text-gray-400 ${isMouseEnter[`policy5`]? "text-primary11" : ""}`}>วิชาการ</div>
                      <div className={`bg-gray-600 px-2 py-1 my-auto bg-opacity-80 rounded-md text-gray-400 ${isMouseEnter[`policy5`]? "text-primary11" : ""}`}>กิจกรรม</div>
                  </div>
                </div>                
             </div>  

             <div 
                  className={`grid grid-cols-[3fr_7fr] transition-all ${isMouseEnter['policy6']? "bg-primary10 bg-opacity-20" : ""} rounded-xl py-6`}
                  onMouseEnter={() => setIsMouseEnter({ ['policy6']: true})}
                  onMouseLeave={() => setIsMouseEnter({ ['policy6']: false})}
             >
                <div>
                  <img className=' mx-auto my grid rounded-md opacity-80' src={pride} />
                </div>
                <div className="grid gap-5">
                  <div className={`font-medium ${isMouseEnter['policy6']? "text-primary11" : ""} text-xl`}> {data.Main6} </div>
                  <div className="text-sm text-gray-400"> {data.Content6}</div>
                  <div className="flex gap-4 text-sm">
                      <div className={`bg-gray-600 px-2 py-1 my-auto bg-opacity-80 rounded-md text-gray-400 ${isMouseEnter[`policy6`]? "text-primary11" : ""}`}>วิชาการ</div>
                      <div className={`bg-gray-600 px-2 py-1 my-auto bg-opacity-80 rounded-md text-gray-400 ${isMouseEnter[`policy6`]? "text-primary11" : ""}`}>กิจกรรม</div>
                  </div>
                </div>                
             </div> 

             <div 
                  className={`grid grid-cols-[3fr_7fr] transition-all ${isMouseEnter['policy7']? "bg-primary10 bg-opacity-20" : ""} rounded-xl py-6`}
                  onMouseEnter={() => setIsMouseEnter({ ['policy7']: true})}
                  onMouseLeave={() => setIsMouseEnter({ ['policy7']: false})}
             >
                <div>
                  <img className=' mx-auto my grid rounded-md opacity-80' src={oph} />
                </div>
                <div className="grid gap-5">
                  <div className={`font-medium ${isMouseEnter['policy7']? "text-primary11" : ""} text-xl`}> {data.Main7} </div>
                  <div className="text-sm text-gray-400"> {data.Content7}</div>
                  <div className="flex gap-4 text-sm">
                      <div className={`bg-gray-600 px-2 py-1 my-auto bg-opacity-80 rounded-md text-gray-400 ${isMouseEnter[`policy7`]? "text-primary11" : ""}`}>วิชาการ</div>
                      <div className={`bg-gray-600 px-2 py-1 my-auto bg-opacity-80 rounded-md text-gray-400 ${isMouseEnter[`policy7`]? "text-primary11" : ""}`}>กิจกรรม</div>
                  </div>
                </div>                
             </div> 

             <div 
                  className={`grid grid-cols-[3fr_7fr] transition-all ${isMouseEnter['policy8']? "bg-primary10 bg-opacity-20" : ""} rounded-xl py-6`}
                  onMouseEnter={() => setIsMouseEnter({ ['policy8']: true})}
                  onMouseLeave={() => setIsMouseEnter({ ['policy8']: false})}
             >
                <div>
                  <img className=' mx-auto my grid rounded-md opacity-80' src={rahad} />
                </div>
                <div className="grid gap-5">
                  <div className={`font-medium ${isMouseEnter['policy8']? "text-primary11" : ""} text-xl`}> {data.Main8} </div>
                  <div className="text-sm text-gray-400"> {data.Content8}</div>
                  <div className="flex gap-4 text-sm">
                      <div className={`bg-gray-600 px-2 py-1 my-auto bg-opacity-80 rounded-md text-gray-400 ${isMouseEnter[`policy8`]? "text-primary11" : ""}`}>วิชาการ</div>
                      <div className={`bg-gray-600 px-2 py-1 my-auto bg-opacity-80 rounded-md text-gray-400 ${isMouseEnter[`policy8`]? "text-primary11" : ""}`}>กิจกรรม</div>
                      <div className={`bg-gray-600 px-2 py-1 my-auto bg-opacity-80 rounded-md text-gray-400 ${isMouseEnter[`policy8`]? "text-primary11" : ""}`}>กฎและการเปลี่ยนแปลง</div>
                  </div>
                </div>                
             </div> 

           


           </div>
    )
}

export default Policy2;