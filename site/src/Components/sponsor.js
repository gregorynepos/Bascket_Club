import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

function Sponsor() {

  const slideImages = [
    {
      id: 1,
      Image: `./img/logoRenault3.jpg`,
      caption: "RENAULT",

    },
    {
      id: 2,
      Image: `./img/LIGUEPACA.jpeg`,
      caption: "Ligue PACA",
    }
    ,
    {
      id: 3,
      Image: `./img/crop_557341507aa1a_FFBB2010logo.png`,
      caption: "FFBB",
    }
    ,
    {
      id: 4,
      Image: `./img/comite_ffbb.jpg`,
      caption: "Comite 13",
    }
    ,
    {
      id: 5,
      Image: `./img/ACSCONSEIL.jpg`,
      caption: "ACS ",
    }
  ];
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1



  };
  return (

    <>
      <section>
        <div style={{
          backgroundImage: `url("./img/8.png")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}>
          <div className="sponsor-carrousel">
            <h1>Sponsors</h1>
            <Slider {...settings}>
              {slideImages.map((slideImage, index) => (
                <div key={index} className='box'>
                  <img src={slideImage.Image} alt="" />
                  <h3>{slideImage.caption}</h3>

                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  )
}

export default Sponsor;