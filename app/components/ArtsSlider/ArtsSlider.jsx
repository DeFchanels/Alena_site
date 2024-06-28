import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Styles from "./ArtsSlider.module.css";

export const ArtsSlider = (props) => {
  const slides = props.slides;
  const add_class = props.additional_class
  const classs = "swiper" + ' ' + add_class;
  return (
    <div className={Styles.page}>
      <div className={classs}>
        <div className="swiper-wrapper">
          {slides.map((slide, id) => (
            <div className="swiper-slide" key={id}>
              <img className={Styles.swiper_slide} src={slide}  />
            </div>
          ))}
        </div>
        <div className="swiper-pagination"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    </div>
  );
};
