import  { useRef } from 'react'
import Slick from "react-slick";
import Image from "./Image";


const Carousel = (props) => {
    const { slides, settings, className} = props;
    const slider = useRef();
    if (!slides || !slides.length) {
      return null;
    }

    if (slides.length === 1) {
        const imgProps = {
            align: slide.image1_anchor,
            src: slide.image1,
            alt: slide.image1_alt_text
        };
        return (
          <div
            className={`carousel-with-one-image ${className}`}
            style={{ padding: 0 }}
          >
            <Image {...imgProps} />
          </div>
        );
      }
  
      return (
        <div className={`carousel ${className}`}>
          <Slick ref={slider} {...settings}>
            {slides.map((slide, i) => {
              return (
                <div key={i}>
                  {this.imageComponentFor(slide)}
                  {slide.blurb1 && (
                    <div className="image-caption">{slide.blurb1}</div>
                  )}
                </div>
              );
            })}
          </Slick>
        </div>
      );
}

  export default Carousel;
