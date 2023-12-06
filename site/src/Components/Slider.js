import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


function Carousel() {
  //data pour les photos du carousel
  const slideImages = [
    {
      Image: `./img/slide-1.jpg`,
      caption: "actu du basket ball club Allauch",
    },
    {
      Image: `./img/slide-2.jpg`,
      caption: "resultats du basket ball club Allauch",
    },
    {
      Image: `./img/slide-3.jpg`,
      caption: "médias du basket ball club Allauch",
    },
    //parametre pour régler le slide
  ]; const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 6000,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1


  };


  return (
    <>
      <div className="carrousel">
        <Slider {...settings}>
          {slideImages.map((slideImage, index) => (
            <div key={index} className='box'>
              <img src={slideImage.Image} alt="" />
              <h3>{slideImage.caption}</h3>

            </div>
          ))}
        </Slider>
      </div>
    </>
  )
}

export default Carousel;



