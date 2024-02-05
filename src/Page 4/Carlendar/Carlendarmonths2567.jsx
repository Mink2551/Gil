import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const navs = [
    { title:"January"    , sectionId:"January2567"  },
    { title:"February"   , sectionId:"February2567" },
    { title:"March"      , sectionId:"March2567"    },
    { title:"April"      , sectionId:"April2567"    },
    { title:"May"        , sectionId:"May2567"      },
    { title:"June"       , sectionId:"June2567"     },
    { title:"July"       , sectionId:"July2567"     },
    { title:"August"     , sectionId:"August2567"   },
    { title:"September"  , sectionId:"September2567"},
    { title:"October"    , sectionId:"October2567"  },
    { title:"November"   , sectionId:"November2567" },
    { title:"December"   , sectionId:"December2567" },
    
]

const Carlendarmonths2567 = () => {

    const [isMouseEnter, setIsMouseEnter] = useState({}); 

    const handleClick = (sectionId) => {
        console.log(sectionId)
        document.getElementById(sectionId).scrollIntoView({ behavior: "smooth"})

    }



    return(
        <div>
            <div class="container mx-auto my-8 p-4 bg-white shadow-lg mt-32 ">
                <div class="text-2xl font-semibold mb-4" >Months of 2567</div>

                <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                     {
                        navs.map((e,i )=>(
                           <div key={`nav-${e}-${i}`}
                           onClick={() => handleClick(e.sectionId)}
                           onMouseEnter={() => setIsMouseEnter({[e.title]: true })}
                           onMouseLeave={() => setIsMouseEnter({[e.title]: false })}
                           >
                              
                               <li             
                                class={`py-4 px-4 bg-gray-200 rounded-md cursor-pointer hover:bg-gray-300  `} >{e.title}</li>                                             
                           </div>

                        ))
                     }
                    
                    





                    {/* <li
                    onMouseEnter={() => setIsMouseEnter({ ['m1']: true})}
                    onMouseLeave={() => setIsMouseEnter({ ['m1']: false})}
                    class={`py-4 px-4 bg-gray-200 rounded-md cursor-pointer ${isMouseEnter['m1']? "bg-gray-300" : ""} `} >January</li> */}

                    {/* <li
                    onMouseEnter={() => setIsMouseEnter({ ['m2']: true})}
                    onMouseLeave={() => setIsMouseEnter({ ['m2']: false})}
                    class={`py-4 px-4 bg-gray-200 rounded-md cursor-pointer ${isMouseEnter['m2']? "bg-gray-300" : ""} `}>February</li>

                    <li
                    onMouseEnter={() => setIsMouseEnter({ ['m3']: true})}
                    onMouseLeave={() => setIsMouseEnter({ ['m3']: false})}
                    class={`py-4 px-4 bg-gray-200 rounded-md cursor-pointer ${isMouseEnter['m3']? "bg-gray-300" : ""} `}>March</li>

                    <li
                    onMouseEnter={() => setIsMouseEnter({ ['m4']: true})}
                    onMouseLeave={() => setIsMouseEnter({ ['m4']: false})}
                    class={`py-4 px-4 bg-gray-200 rounded-md cursor-pointer ${isMouseEnter['m4']? "bg-gray-300" : ""} `}>April</li>

                    <li
                    onMouseEnter={() => setIsMouseEnter({ ['m5']: true})}
                    onMouseLeave={() => setIsMouseEnter({ ['m5']: false})}
                    class={`py-4 px-4 bg-gray-200 rounded-md cursor-pointer ${isMouseEnter['m5']? "bg-gray-300" : ""} `}>May</li>

                    <li
                    onMouseEnter={() => setIsMouseEnter({ ['m6']: true})}
                    onMouseLeave={() => setIsMouseEnter({ ['m6']: false})}
                    class={`py-4 px-4 bg-gray-200 rounded-md cursor-pointer ${isMouseEnter['m6']? "bg-gray-300" : ""} `}>June</li>

                    <li
                    onMouseEnter={() => setIsMouseEnter({ ['m7']: true})}
                    onMouseLeave={() => setIsMouseEnter({ ['m7']: false})}
                    class={`py-4 px-4 bg-gray-200 rounded-md cursor-pointer ${isMouseEnter['m7']? "bg-gray-300" : ""} `}>July</li>

                    <li
                    onMouseEnter={() => setIsMouseEnter({ ['m8']: true})}
                    onMouseLeave={() => setIsMouseEnter({ ['m8']: false})}
                    class={`py-4 px-4 bg-gray-200 rounded-md cursor-pointer ${isMouseEnter['m8']? "bg-gray-300" : ""} `}>August</li>

                    <li
                    onMouseEnter={() => setIsMouseEnter({ ['m9']: true})}
                    onMouseLeave={() => setIsMouseEnter({ ['m9']: false})}
                    class={`py-4 px-4 bg-gray-200 rounded-md cursor-pointer ${isMouseEnter['m9']? "bg-gray-300" : ""} `}>September</li>
                    <li
                    onMouseEnter={() => setIsMouseEnter({ ['m10']: true})}
                    onMouseLeave={() => setIsMouseEnter({ ['m10']: false})}
                    class={`py-4 px-4 bg-gray-200 rounded-md cursor-pointer ${isMouseEnter['m10']? "bg-gray-300" : ""} `}>October</li>

                    <li
                    onMouseEnter={() => setIsMouseEnter({ ['m11']: true})}
                    onMouseLeave={() => setIsMouseEnter({ ['m11']: false})}
                    class={`py-4 px-4 bg-gray-200 rounded-md cursor-pointer ${isMouseEnter['m11']? "bg-gray-300" : ""} `}>November</li>

                    <li
                    onMouseEnter={() => setIsMouseEnter({ ['m12']: true})}
                    onMouseLeave={() => setIsMouseEnter({ ['m12']: false})}
                    class={`py-4 px-4 bg-gray-200 rounded-md cursor-pointer ${isMouseEnter['m12']? "bg-gray-300" : ""} `}>December</li> */}

                </ul>
            </div>

            {/* <div class="container mx-auto my-8 p-4 bg-white shadow-lg mt-32 opacity-70 scale-95">
                <div class="text-2xl font-semibold mb-4">Months of 2568</div>

                <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <li class="py-4 px-4 bg-gray-200 rounded-md">January</li>
                    <li class="py-4 px-4 bg-gray-200 rounded-md">February</li>
                    <li class="py-4 px-4 bg-gray-200 rounded-md">March</li>
                    <li class="py-4 px-4 bg-gray-200 rounded-md">April</li>
                    <li class="py-4 px-4 bg-gray-200 rounded-md">May</li>
                    <li class="py-4 px-4 bg-gray-200 rounded-md">June</li>
                    <li class="py-4 px-4 bg-gray-200 rounded-md">July</li>
                    <li class="py-4 px-4 bg-gray-200 rounded-md">August</li>
                    <li class="py-4 px-4 bg-gray-200 rounded-md">September</li>
                    <li class="py-4 px-4 bg-gray-200 rounded-md">October</li>
                    <li class="py-4 px-4 bg-gray-200 rounded-md">November</li>
                    <li class="py-4 px-4 bg-gray-200 rounded-md">December</li>
                </ul>
            </div> */}
        </div>
    )
}

export default Carlendarmonths2567