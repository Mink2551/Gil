import carlendarpicture1 from "../../../public/Carlendarpicture1.jpg"

const Toping = () => {
    return(
        <div className="">
          <div className="carousel w-full">
            <div id="item1" className="carousel-item w-full">
              <img src={carlendarpicture1} className="w-full rounded-xl" />
            </div> 
            <div id="item2" className="carousel-item w-full">
              <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
            </div> 
            <div id="item3" className="carousel-item w-full">
              <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
            </div> 
            <div id="item4" className="carousel-item w-full">
              <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
            </div>
          </div> 
          
        </div>
    )
}

export default Toping