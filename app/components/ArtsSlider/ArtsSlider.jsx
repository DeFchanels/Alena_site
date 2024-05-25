import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Styles from "./ArtsSlider.module.css";

export const ArtsSlider = () => {
  return (
    <div className={Styles.page}>
      <div className="swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img
              className={Styles.swiper_slide}
              src="/romeo_and_juliette.png"
            />
          </div>
          <div className="swiper-slide">
            <img className={Styles.swiper_slide} src="/Wataru.png" />
          </div>
          <div className="swiper-slide">
            <img className={Styles.swiper_slide} src="/Shaman.png" />
          </div>
          <div className="swiper-slide">
            <img className={Styles.swiper_slide} src="/Cardswap.png" />
          </div>
          <div className="swiper-slide">
            <img className={Styles.swiper_slide} src="/Xiao.png" />
          </div>
          <div className="swiper-slide">
            <img className={Styles.swiper_slide} src="/Venti.png" />
          </div>
          <div className="swiper-slide">
            <img className={Styles.swiper_slide} src="/Albedo.png" />
          </div>
        </div>
        <div className="swiper-pagination"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    </div>
  );
};
