import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const navs = [
    { title:"ฝ่ายกิจการนักเรียน", sectionId:"ฝ่ายกิจการนักเรียน-section"},
    { title:"ฝ่ายวิชาการ", sectionId:"ฝ่ายวิชาการ-section"},
    { title:"ฝ่ายกีฬาและนันทนาการ", sectionId:"ฝ่ายกีฬาและนันทนาการ-section"},
    { title:"ฝ่ายสิ่งแวดล้อม", sectionId:"ฝ่ายสิ่งแวดล้อม-section"},
    { title:"ฝ่ายเทคโนโลยี และ สาระสนเทศ", sectionId:"ฝ่ายเทคโนโลยี และ สาระสนเทศ-section"},
]

const Navibar = () => {
    const [isMouseEnter, setIsMouseEnter] = useState({});

    const handleClick = (sectionId) => {
        console.log(sectionId)
        document.getElementById(sectionId).scrollIntoView({ behavior: "smooth"})

    }

    return(
        <div className='ml-12 mr-14 mb-14 mt-14 flex flex-col  text-white'
             
        >           
              {
                navs.map((e, i) => (
                    <div
                        key={`nav-${e}-${i}`}
                        onClick={() => handleClick(e.sectionId)}
                        onMouseEnter={() => setIsMouseEnter({[e.title]: true })}
                        onMouseLeave={() => setIsMouseEnter({[e.title]: false })}
                        className="cursor-pointer flex py-2.5"
                    >     
                        <div>    
                          <FontAwesomeIcon icon={faArrowRightLong} className={`mr-2 text-primary11 new-arrow ${isMouseEnter[e.title] ? "" : "hidden" }`} />                      
                        </div>
                          <div className={`${isMouseEnter[e.title] ? "translate-x-5 scale-125 text-primary11" : ""} duration-500 ease-out`} >{e.title}</div>         
                    </div> 
                )) 
              }
              
            </div>
    )
}

export default Navibar;