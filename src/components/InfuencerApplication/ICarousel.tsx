import Skills from "../../assets/skills.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export function ICarousel() {
    return <div className="carousel">
        <Carousel
            autoFocus
            infiniteLoop
            showThumbs={false}
            showArrows={true}
            showStatus={false}>
            <div>
                <img  style={{objectFit: 'cover', height:"",width:"",paddingInline:"12px"}} src="image1.png" alt="img1"/>
            </div>
            <div>
                <img  style={{objectFit: 'cover',height:"50vw",width:""}} src="image2.png"alt="img2"/>
            </div>
            <div>
                <img  style={{objectFit: 'cover',height:"50vw",width:""}} src="image3.png"alt="img3"/>
            </div>
        </Carousel>
    </div>
}