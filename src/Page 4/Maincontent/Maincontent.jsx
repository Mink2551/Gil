import Cardtimeline from "./card/card1"
import CardKidjakramCalendar from "./card/card2"
import CardPost from "./card/card3"
import CardGallery from "./card/card4"
import CardRequestsong from "./card/card5"
import CardComment from "./card/card6"

const Maincontent = () => {
    return(
        <div >
          <div className="grid sm:grid-cols-[3fr_3fr_3fr] my-16 mx-auto ml-4 mr-4 max-w-7xl gap-3 mb-48 ">
             <Cardtimeline/>
             <CardKidjakramCalendar/>
             <CardPost/>
             <CardGallery/>
             <CardRequestsong/>
             <CardComment/>
           
            
          </div>
        </div>
    )
}

export default Maincontent