import React from "react";
import Slider from "react-slick";

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <button
      className={`${className} slider__button slider__button--prev`}
      onClick={onClick}
    />
  );
}

function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <button
      className={`${className} slider__button slider__button--next`}
      onClick={onClick}
    />
  );
}

export default ({ children, elementClass }) => {
  const settings = {
    autoplay: true,
    centerMode: true,
    centerPadding: "0px",
    className: `slider ${elementClass}`,
    dots: false,
    pauseOnFocus: true,
    slide: "ul",
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />
  };

  return <Slider {...settings}>{children}</Slider>;
};
