import UNFUNS from "../../../../../public/Uniformunisex.png"
import Saphapm from "../../../../../public/SaphaPm.png"
import sahagon from "../../../../../public/3.png"
import taebut from "../../../../../public/4.png"
import hair from "../../../../../public/5.png"
import calendar from "../../../../../public/6.png"
import pmstaff from "../../../../../public/7.png"
import dayblank from "../../../../../public/8.png"
import trophy from "../../../../../public/9.png"
import mv from "../../../../../public/10.png"
import handtwo from "../../../../../public/11.png"
import { data } from "../../../../Contents/Policy"
import { useEffect, useState } from "react";



const Policy1 = () => {
  

  const [isMouseEnter, setIsMouseEnter] = useState({});


    return(
        <div className="mb-56 grid m-5 mt-8 ">
            <div className="text-gray-600 grid gap-7 mb-10 scroll-m-36" id="ฝ่ายกิจการนักเรียน-section" >ฝ่ายกิจการนักเรียน</div>
           
             <div 
                  className={`grid grid-cols-[3fr_7fr] transition-all ${isMouseEnter['policy1']? "bg-primary10 bg-opacity-20" : ""} rounded-xl py-6`}
                  onMouseEnter={() => setIsMouseEnter({ ['policy1']: true})}
                  onMouseLeave={() => setIsMouseEnter({ ['policy1']: false})}
             >
                <div>
                  <img className=' mx-auto my grid rounded-md mt-4' src={Saphapm} />
                </div>
                <div className="grid gap-5">
                  <div className={`font-medium ${isMouseEnter['policy1']? "text-primary11" : ""} text-xl`}> {data.Main1} </div>
                  <div className="text-sm text-gray-400"> {data.Content1}</div>
                  <div className="flex gap-4 text-sm">
                      <div className={`bg-gray-600 px-2 py-1 my-auto bg-opacity-80 rounded-md text-gray-400 ${isMouseEnter[`policy1`]? "text-primary11" : ""}`}>กิจการนักเรียน</div>
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
                  <img className=' mx-auto my grid rounded-md opacity-80' src={UNFUNS} />
                </div>
                <div className="grid gap-5">
                  <div className={`font-medium ${isMouseEnter['policy2']? "text-primary11" : ""} text-xl`}> {data.Main2} </div>
                  <div className="text-sm text-gray-400"> {data.Content2}</div>
                  <div className="flex gap-4 text-sm">
                      <div className={`bg-gray-600 px-2 py-1 my-auto bg-opacity-80 rounded-md text-gray-400  ${isMouseEnter[`policy2`]? "text-primary11" : ""}`}>กิจการนักเรียน</div>
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
                  <img className=' mx-auto my grid rounded-md opacity-80' src={sahagon} />
                </div>
                <div className="grid gap-5">
                  <div className={`font-medium ${isMouseEnter['policy3']? "text-primary11" : ""} text-xl`}> {data.Main3} </div>
                  <div className="text-sm text-gray-400"> {data.Content3}</div>
                  <div className="flex gap-4 text-sm">
                      <div className={`bg-gray-600 px-2 py-1 my-auto bg-opacity-80 rounded-md text-gray-400  ${isMouseEnter[`policy3`]? "text-primary11" : ""}`}>กิจการนักเรียน</div>
                      <div className={`bg-gray-600 px-2 py-1 my-auto bg-opacity-80 rounded-md text-gray-400  ${isMouseEnter[`policy3`]? "text-primary11" : ""}`}>นโยบายหลัก</div>
                      <div className={`bg-gray-600 px-2 py-1 my-auto bg-opacity-80 rounded-md text-gray-400  ${isMouseEnter[`policy3`]? "text-primary11" : ""}`}>กฎและการเปลี่ยนแปลง</div>
                  </div>
                </div>                
             </div> 

             <div 
                  className={`grid grid-cols-[3fr_7fr] transition-all ${isMouseEnter['policy4']? "bg-primary10 bg-opacity-20" : ""} rounded-xl py-6`}
                  onMouseEnter={() => setIsMouseEnter({ ['policy4']: true})}
                  onMouseLeave={() => setIsMouseEnter({ ['policy4']: false})}
             >
                <div>
                  <img className=' mx-auto my grid rounded-md opacity-80' src={taebut} />
                </div>
                <div className="grid gap-5">
                  <div className={`font-medium ${isMouseEnter['policy4']? "text-primary11" : ""} text-xl`}> {data.Main4} </div>
                  <div className="text-sm text-gray-400"> {data.Content4}</div>
                  <div className="flex gap-4 text-sm">
                      <div className={`bg-gray-600 px-2 py-1 my-auto bg-opacity-80 rounded-md text-gray-400 ${isMouseEnter[`policy4`]? "text-primary11" : ""}`}>กิจการนักเรียน</div>
                      <div className={`bg-gray-600 px-2 py-1 my-auto bg-opacity-80 rounded-md text-gray-400 ${isMouseEnter[`policy4`]? "text-primary11" : ""}`}>กฎและการเปลี่ยนแปลง</div>
                  </div>
                </div>                
             </div> 

             <div 
                  className={`grid grid-cols-[3fr_7fr] transition-all ${isMouseEnter['policy5']? "bg-primary10 bg-opacity-20" : ""} rounded-xl py-6`}
                  onMouseEnter={() => setIsMouseEnter({ ['policy5']: true})}
                  onMouseLeave={() => setIsMouseEnter({ ['policy5']: false})}
             >
                <div>
                  <img className=' mx-auto my grid rounded-md opacity-80' src={hair} />
                </div>
                <div className="grid gap-5">
                  <div className={`font-medium ${isMouseEnter['policy5']? "text-primary11" : ""} text-xl`}> {data.Main5} </div>
                  <div className="text-sm text-gray-400"> {data.Content6}</div>
                  <div className="flex gap-4 text-sm">
                      <div className={`bg-gray-600 px-2 py-1 my-auto bg-opacity-80 rounded-md text-gray-400 ${isMouseEnter[`policy5`]? "text-primary11" : ""}`}>กิจการนักเรียน</div>
                      <div className={`bg-gray-600 px-2 py-1 my-auto bg-opacity-80 rounded-md text-gray-400 ${isMouseEnter[`policy5`]? "text-primary11" : ""}`}>เนื้อหาต่อเนื่อง</div>
                  </div>
                </div>                
             </div>  

             <div 
                  className={`grid grid-cols-[3fr_7fr] transition-all ${isMouseEnter['policy6']? "bg-primary10 bg-opacity-20" : ""} rounded-xl py-6`}
                  onMouseEnter={() => setIsMouseEnter({ ['policy6']: true})}
                  onMouseLeave={() => setIsMouseEnter({ ['policy6']: false})}
             >
                <div>
                  <img className=' mx-auto my grid rounded-md opacity-80' src={calendar} />
                </div>
                <div className="grid gap-5">
                  <div className={`font-medium ${isMouseEnter['policy6']? "text-primary11" : ""} text-xl`}> {data.Main6} </div>
                  <div className="text-sm text-gray-400"> {data.Content6}</div>
                  <div className="flex gap-4 text-sm">
                      <div className={`bg-gray-600 px-2 py-1 my-auto bg-opacity-80 rounded-md text-gray-400 ${isMouseEnter[`policy6`]? "text-primary11" : ""}`}>กิจการนักเรียน</div>
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
                  <img className=' mx-auto my grid rounded-md opacity-80' src={pmstaff} />
                </div>
                <div className="grid gap-5">
                  <div className={`font-medium ${isMouseEnter['policy7']? "text-primary11" : ""} text-xl`}> {data.Main7} </div>
                  <div className="text-sm text-gray-400"> {data.Content7}</div>
                  <div className="flex gap-4 text-sm">
                      <div className={`bg-gray-600 px-2 py-1 my-auto bg-opacity-80 rounded-md text-gray-400 ${isMouseEnter[`policy7`]? "text-primary11" : ""}`}>กิจการนักเรียน</div>
                      <div className={`bg-gray-600 px-2 py-1 my-auto bg-opacity-80 rounded-md text-gray-400 ${isMouseEnter[`policy7`]? "text-primary11" : ""}`}>นโยบายหลัก</div>
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
                  <img className=' mx-auto my grid rounded-md opacity-80' src={dayblank} />
                </div>
                <div className="grid gap-5">
                  <div className={`font-medium ${isMouseEnter['policy8']? "text-primary11" : ""} text-xl`}> {data.Main8} </div>
                  <div className="text-sm text-gray-400"> {data.Content8}</div>
                  <div className="flex gap-4 text-sm">
                      <div className={`bg-gray-600 px-2 py-1 my-auto bg-opacity-80 rounded-md text-gray-400 ${isMouseEnter[`policy8`]? "text-primary11" : ""}`}>กิจการนักเรียน</div>
                      <div className={`bg-gray-600 px-2 py-1 my-auto bg-opacity-80 rounded-md text-gray-400 ${isMouseEnter[`policy8`]? "text-primary11" : ""}`}>นโยบายหลัก</div>
                      <div className={`bg-gray-600 px-2 py-1 my-auto bg-opacity-80 rounded-md text-gray-400 ${isMouseEnter[`policy8`]? "text-primary11" : ""}`}>เนื้อหาต่อเนื่อง</div>
                  </div>
                </div>                
             </div> 

             <div 
                  className={`grid grid-cols-[3fr_7fr] transition-all ${isMouseEnter['policy9']? "bg-primary10 bg-opacity-20" : ""} rounded-xl py-6`}
                  onMouseEnter={() => setIsMouseEnter({ ['policy9']: true})}
                  onMouseLeave={() => setIsMouseEnter({ ['policy9']: false})}
             >
                <div>
                  <img className=' mx-auto my grid rounded-md opacity-80' src={trophy} />
                </div>
                <div className="grid gap-5">
                  <div className={`font-medium ${isMouseEnter['policy9']? "text-primary11" : ""} text-xl`}> {data.Main9} </div>
                  <div className="text-sm text-gray-400"> {data.Content9}</div>
                  <div className="flex gap-4 text-sm">
                      <div className={`bg-gray-600 px-2 py-1 my-auto bg-opacity-80 rounded-md text-gray-400 ${isMouseEnter[`policy9`]? "text-primary11" : ""}`}>กิจการนักเรียน</div>
                      <div className={`bg-gray-600 px-2 py-1 my-auto bg-opacity-80 rounded-md text-gray-400 ${isMouseEnter[`policy9`]? "text-primary11" : ""}`}>นโยบายหลัก</div>
                      <div className={`bg-gray-600 px-2 py-1 my-auto bg-opacity-80 rounded-md text-gray-400 ${isMouseEnter[`policy9`]? "text-primary11" : ""}`}>กฎและการเปลี่ยนแปลง</div>
                  </div>
                </div>                
             </div> 

             <div 
                  className={`grid grid-cols-[3fr_7fr] transition-all ${isMouseEnter['policy10']? "bg-primary10 bg-opacity-20" : ""} rounded-xl py-6`}
                  onMouseEnter={() => setIsMouseEnter({ ['policy10']: true})}
                  onMouseLeave={() => setIsMouseEnter({ ['policy10']: false})}
             >
                <div>
                  <img className=' mx-auto my grid rounded-md opacity-80' src={mv} />
                </div>
                <div className="grid gap-5">
                  <div className={`font-medium ${isMouseEnter['policy10']? "text-primary11" : ""} text-xl`}> {data.Main10} </div>
                  <div className="text-sm text-gray-400"> {data.Content10}</div>
                  <div className="flex gap-4 text-sm">
                      <div className={`bg-gray-600 px-2 py-1 my-auto bg-opacity-80 rounded-md text-gray-400 ${isMouseEnter[`policy10`]? "text-primary11" : ""}`}>กิจการนักเรียน</div>
                      <div className={`bg-gray-600 px-2 py-1 my-auto bg-opacity-80 rounded-md text-gray-400 ${isMouseEnter[`policy10`]? "text-primary11" : ""}`}>นโยบายหลัก</div>
                  </div>
                </div>                
             </div> 

             <div 
                  className={`grid grid-cols-[3fr_7fr] transition-all ${isMouseEnter['policy11']? "bg-primary10 bg-opacity-20" : ""} rounded-xl py-6`}
                  onMouseEnter={() => setIsMouseEnter({ ['policy11']: true})}
                  onMouseLeave={() => setIsMouseEnter({ ['policy11']: false})}
             >
                <div>
                  <img className=' mx-auto my grid rounded-md opacity-80' src={handtwo} />
                </div>
                <div className="grid gap-5">
                  <div className={`font-medium ${isMouseEnter['policy11']? "text-primary11" : ""} text-xl`}> {data.Main11} </div>
                  <div className="text-sm text-gray-400"> {data.Content11}</div>
                  <div className="flex gap-4 text-sm">
                      <div className={`bg-gray-600 px-2 py-1 my-auto bg-opacity-80 rounded-md text-gray-400 ${isMouseEnter[`policy11`]? "text-primary11" : ""}`}>กิจการนักเรียน</div>
                      <div className={`bg-gray-600 px-2 py-1 my-auto bg-opacity-80 rounded-md text-gray-400 ${isMouseEnter[`policy11`]? "text-primary11" : ""}`}>นโยบายหลัก</div>
                      <div className={`bg-gray-600 px-2 py-1 my-auto bg-opacity-80 rounded-md text-gray-400 ${isMouseEnter[`policy11`]? "text-primary11" : ""}`}>กิจกรรม</div>
                  </div>
                </div>                
             </div> 

            

             
            



           </div>
    )
}

export default Policy1;