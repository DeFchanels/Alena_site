import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Styles from "./BackgroundArts.module.css";

export const BackgroundArts = () => {
  return (
    <div className={Styles.page}>
      <h1
        сlass="ill_header"
        style={{
          height: "20%",
          position: "absolute",
          marginTop: '20%', 
          marginBottom: "43%",
          marginLeft: "52%",
        }}
      >
        Background Art
      </h1>
      <div className="swiper" style={{'width': '65% !important', 'marginTop':'10%', 'marginRight': '15%'}}>
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img
              className={Styles.swiper_slide}
              src="/bg_1.png"
            />
          </div>
          <div className="swiper-slide">
            <img className={Styles.swiper_slide} src="/bg7.png" />
          </div>
          <div className="swiper-slide">
            <img className={Styles.swiper_slide} src="/bg10.png" />
          </div>
          <div className="swiper-slide">
            <img className={Styles.swiper_slide} src="/entrance_faraway_14.png" />
          </div>
          <div className="swiper-slide">
            <img className={Styles.swiper_slide} src="/picasso_room_4.png" />
          </div>
          <div className="swiper-slide">
            <img className={Styles.swiper_slide} src="/painting_7.png" />
          </div>
        </div>
        <div className="swiper-pagination"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    </div>
  );
};
