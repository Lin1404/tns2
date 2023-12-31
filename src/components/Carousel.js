import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel({ content, imgs, settingProps }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    ...settingProps,
  };

  return (
    <div className="sliderContainer">
      <Slider {...settings} className="carousel paddingBot">
        {content &&
          content.map((item) => (
            <div key={item.customer} className="reviews">
              {item.review}
              <p className="customer">{`----${item.customer}`}</p>
            </div>
          ))}
        {imgs &&
          imgs.map((item) => (
            <div key={item} className="carouselImg">
              <img
                src={item}
                alt="illustration"
                style={{
                  width: "100%",
                }}
              />
            </div>
          ))}
      </Slider>
    </div>
  );
}
