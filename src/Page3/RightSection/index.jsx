import Policy1 from "./Policy/กิจการนักเรียน";
import Policy3 from "./Policy/พละ";
import Policy2 from "./Policy/วิชาการ";
import Policy4 from "./Policy/สิ่งแวดล้อม/สิ่งแวดล้อม";
import Policy5 from "./Policy/เทคโน";

const RightSection = () => {
    return(
        <div className='mr-24 mt-16 ml-16 gird  text-white'>
           
           <Policy1/>       
           <Policy2/>  
           <Policy3/>
           <Policy4/>
           <Policy5/>
        </div>

    )
}

export default RightSection;