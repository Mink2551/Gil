import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Wind from "../../../../../public/wind.jpg"
import UNFUNS from "../../../../../public/Uniformunisex.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { data } from "../../../../Contents/Policy"
import { useState } from "react";


const Policy1 = () => {
  const [isMouseEnter, setIsMouseEnter] = useState({});


    return(
        <div className="mb-96 grid m-5 ">
            <div className="text-gray-600 grid gap-7" >ฝ่ายกิจการนักเรียน</div>
           
             <div 
                  className={`grid grid-cols-[3fr_7fr] transition-all ${isMouseEnter['policy1']? "bg-primary10 bg-opacity-20" : ""} rounded-xl py-6`}
                  onMouseEnter={() => setIsMouseEnter({ ['policy1']: true})}
                  onMouseLeave={() => setIsMouseEnter({ ['policy1']: false})}
             >
                <div>
                  <img className='w-2/4 mx-auto my grid rounded-md mt-4 opacity-80' src={Wind} />
                </div>
                <div className="grid gap-5">
                  <div className={`font-medium ${isMouseEnter['policy1']? "text-blue-400" : ""} text-xl`}> {data.Main1} </div>
                  <div className="text-sm text-gray-400"> {data.Content1}</div>
                  <div className={`text-sm text-gray-600 mr-1 ${isMouseEnter['policy1']? "text-primaryTitle underline" : "" }`} >
                    <a href={data.Link1}><FontAwesomeIcon icon={faArrowUpRightFromSquare} /> ติดตามผลงาน</a>
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
                  <div className={`font-medium ${isMouseEnter['policy2']? "text-blue-400" : ""} text-xl`}> {data.Main2} </div>
                  <div className="text-sm text-gray-400"> {data.Content2}</div>
                  <div className={`text-sm text-gray-600 mr-1 ${isMouseEnter['policy2']? "text-primaryTitle underline" : "" }`} >
                    <a href={data.Link1}><FontAwesomeIcon icon={faArrowUpRightFromSquare} /> ติดตามผลงาน</a>
                  </div>
                </div>                
             </div> 

             <div 
                  className={`grid grid-cols-[3fr_7fr] transition-all ${isMouseEnter['policy3']? "bg-primary10 bg-opacity-20" : ""} rounded-xl py-6`}
                  onMouseEnter={() => setIsMouseEnter({ ['policy3']: true})}
                  onMouseLeave={() => setIsMouseEnter({ ['policy3']: false})}
             >
                <div>
                  <img className=' mx-auto my grid rounded-md opacity-80' src={UNFUNS} />
                </div>
                <div className="grid gap-5">
                  <div className={`font-medium ${isMouseEnter['policy3']? "text-blue-400" : ""} text-xl`}> {data.Main3} </div>
                  <div className="text-sm text-gray-400"> {data.Content3}</div>
                  <div className={`text-sm text-gray-600 mr-1 ${isMouseEnter['policy3']? "text-primaryTitle underline" : "" }`} >
                    <a href={data.Link1}><FontAwesomeIcon icon={faArrowUpRightFromSquare} /> ติดตามผลงาน</a>
                  </div>
                </div>                
             </div> 

             <div 
                  className={`grid grid-cols-[3fr_7fr] transition-all ${isMouseEnter['policy4']? "bg-primary10 bg-opacity-20" : ""} rounded-xl py-6`}
                  onMouseEnter={() => setIsMouseEnter({ ['policy4']: true})}
                  onMouseLeave={() => setIsMouseEnter({ ['policy4']: false})}
             >
                <div>
                  <img className=' mx-auto my grid rounded-md opacity-80' src={UNFUNS} />
                </div>
                <div className="grid gap-5">
                  <div className={`font-medium ${isMouseEnter['policy4']? "text-blue-400" : ""} text-xl`}> {data.Main4} </div>
                  <div className="text-sm text-gray-400"> {data.Content4}</div>
                  <div className={`text-sm text-gray-600 mr-1 ${isMouseEnter['policy4']? "text-primaryTitle underline" : "" }`} >
                    <a href={data.Link1}><FontAwesomeIcon icon={faArrowUpRightFromSquare} /> ติดตามผลงาน</a>
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
                  <div className={`font-medium ${isMouseEnter['policy2']? "text-blue-400" : ""} text-xl`}> {data.Main2} </div>
                  <div className="text-sm text-gray-400"> {data.Content2}</div>
                  <div className={`text-sm text-gray-600 mr-1 ${isMouseEnter['policy2']? "text-primaryTitle underline" : "" }`} >
                    <a href={data.Link1}><FontAwesomeIcon icon={faArrowUpRightFromSquare} /> ติดตามผลงาน</a>
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
                  <div className={`font-medium ${isMouseEnter['policy2']? "text-blue-400" : ""} text-xl`}> {data.Main2} </div>
                  <div className="text-sm text-gray-400"> {data.Content2}</div>
                  <div className={`text-sm text-gray-600 mr-1 ${isMouseEnter['policy2']? "text-primaryTitle underline" : "" }`} >
                    <a href={data.Link1}><FontAwesomeIcon icon={faArrowUpRightFromSquare} /> ติดตามผลงาน</a>
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
                  <div className={`font-medium ${isMouseEnter['policy2']? "text-blue-400" : ""} text-xl`}> {data.Main2} </div>
                  <div className="text-sm text-gray-400"> {data.Content2}</div>
                  <div className={`text-sm text-gray-600 mr-1 ${isMouseEnter['policy2']? "text-primaryTitle underline" : "" }`} >
                    <a href={data.Link1}><FontAwesomeIcon icon={faArrowUpRightFromSquare} /> ติดตามผลงาน</a>
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
                  <div className={`font-medium ${isMouseEnter['policy2']? "text-blue-400" : ""} text-xl`}> {data.Main2} </div>
                  <div className="text-sm text-gray-400"> {data.Content2}</div>
                  <div className={`text-sm text-gray-600 mr-1 ${isMouseEnter['policy2']? "text-primaryTitle underline" : "" }`} >
                    <a href={data.Link1}><FontAwesomeIcon icon={faArrowUpRightFromSquare} /> ติดตามผลงาน</a>
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
                  <div className={`font-medium ${isMouseEnter['policy2']? "text-blue-400" : ""} text-xl`}> {data.Main2} </div>
                  <div className="text-sm text-gray-400"> {data.Content2}</div>
                  <div className={`text-sm text-gray-600 mr-1 ${isMouseEnter['policy2']? "text-primaryTitle underline" : "" }`} >
                    <a href={data.Link1}><FontAwesomeIcon icon={faArrowUpRightFromSquare} /> ติดตามผลงาน</a>
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
                  <div className={`font-medium ${isMouseEnter['policy2']? "text-blue-400" : ""} text-xl`}> {data.Main2} </div>
                  <div className="text-sm text-gray-400"> {data.Content2}</div>
                  <div className={`text-sm text-gray-600 mr-1 ${isMouseEnter['policy2']? "text-primaryTitle underline" : "" }`} >
                    <a href={data.Link1}><FontAwesomeIcon icon={faArrowUpRightFromSquare} /> ติดตามผลงาน</a>
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
                  <div className={`font-medium ${isMouseEnter['policy2']? "text-blue-400" : ""} text-xl`}> {data.Main2} </div>
                  <div className="text-sm text-gray-400"> {data.Content2}</div>
                  <div className={`text-sm text-gray-600 mr-1 ${isMouseEnter['policy2']? "text-primaryTitle underline" : "" }`} >
                    <a href={data.Link1}><FontAwesomeIcon icon={faArrowUpRightFromSquare} /> ติดตามผลงาน</a>
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
                  <div className={`font-medium ${isMouseEnter['policy2']? "text-blue-400" : ""} text-xl`}> {data.Main2} </div>
                  <div className="text-sm text-gray-400"> {data.Content2}</div>
                  <div className={`text-sm text-gray-600 mr-1 ${isMouseEnter['policy2']? "text-primaryTitle underline" : "" }`} >
                    <a href={data.Link1}><FontAwesomeIcon icon={faArrowUpRightFromSquare} /> ติดตามผลงาน</a>
                  </div>
                </div>                
             </div> 

             
            



           </div>
    )
}

export default Policy1;