import img1 from "../../../public/Soundpoint.jpg"
import { data } from "../../Contents/Timeline.js"

const Timeline2 = () => {
    return(
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mt-16 mx-10 xl:mx-80">
        <li>
          <div className={data.textcolor1}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
          </div>
          <div className="timeline-start md:text-end mb-10">
            <time className="font-mono italic"> {data.date1} </time>
            <div className="text-lg font-black"> {data.Main1} </div>
              <img className="transition-all size-40 sm:hover:size-96 mt-5 rounded-xl" src={img1}/> 
             </div>
          <hr className={data.color1}/>
        </li>
        <li>
          <hr className={data.color2} />
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic"> {data.date2} </time>
            <div className="text-lg font-black">{data.Main2}</div>
            <img className="transition-all size-40 sm:hover:size-96 mt-5 rounded-xl" src/> 
          </div>
          <hr className={data.color2} />
        </li>
        <li>
          <hr className={data.color3} />
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
          </div>
          <div className="timeline-start md:text-end mb-10">
            <time className="font-mono italic"> {data.date3} </time>
            <div className="text-lg font-black">{data.Main3}</div>
            <img className="transition-all size-40 sm:hover:size-96 mt-5 rounded-xl" src/>
          </div>
          <hr className={data.color3} />
        </li>
        <li>
          <hr className={data.color4} />
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic"> {data.date4} </time>
            <div className="text-lg font-black">{data.Main4}</div>
            <img className="transition-all size-40 sm:hover:size-96 mt-5 rounded-xl" src/>
          </div>
          <hr className={data.color4} />
        </li>
        <li>
          <hr className={data.color5} />
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
          </div>
          <div className="timeline-start md:text-end mb-10">
            <time className="font-mono italic"> {data.date5} </time>
            <div className="text-lg font-black">{data.Main5}</div>
            <img className="transition-all size-40 sm:hover:size-96 mt-5 rounded-xl" src/>
          </div>
          <hr className={data.color5}/>
        </li>
      
        <li>
          <hr className={data.color7} />
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic"> {data.date7} </time>
            <div className="text-lg font-black">{data.Main7}</div>
            <img className="transition-all size-40 sm:hover:size-96 mt-5 rounded-xl" src/>
          </div>
          <hr className={data.color7} />
        </li>
        <li>
          <hr className={data.color8} />
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
          </div>
          <div className="timeline-start md:text-end mb-10">
            <time className="font-mono italic"> {data.date8} </time>
            <div className="text-lg font-black">{data.Main8}</div>
            <img className="transition-all size-40 sm:hover:size-96 mt-5 rounded-xl" src/>
          </div>
          <hr className={data.color8} />
        </li>
        <li>
          <hr className={data.color9} />
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic"> {data.date9} </time>
            <div className="text-lg font-black">{data.Main9}</div>
            <img className="transition-all size-40 sm:hover:size-96 mt-5 rounded-xl" src/>
          </div>
          <hr className={data.color9} />
        </li>
        <li>
          <hr className={data.color10} />
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
          </div>
          <div className="timeline-start md:text-end mb-10">
            <time className="font-mono italic"> {data.date10} </time>
            <div className="text-lg font-black">{data.Main10}</div>
            <img className="transition-all size-40 sm:hover:size-96 mt-5 rounded-xl" src/>
          </div>
        </li>
        
        
      </ul> 
    )
}

export default Timeline2