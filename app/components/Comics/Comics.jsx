import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Styles from "./Comics.module.css";

const Comics = () => {
  return (
    <div className={Styles.page}>
      <div className="swiper" style={{'width': '45% !important'}}>
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img className={Styles.swiper_slide} src="/real_friendship_1.png" />
          </div>
          <div className="swiper-slide">
            <img className={Styles.swiper_slide} src="/real_friendship_2.png" />
          </div>
          <div className="swiper-slide">
            <img className={Styles.swiper_slide} src="/real_friendship_3.png" />
          </div>
          <div className="swiper-slide">
            <img className={Styles.swiper_slide} src="/real_friendship_4.png" />
          </div>
        </div>
        <div className="swiper-pagination"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    </div>
  );
};

const Comics2 = () => {
    return (
      <div className={Styles.page}>
        <div className="swiper" style={{'width': '45% !important', 'marginTop': '-10%'}}>
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img className={Styles.swiper_slide} src="/gross_people_1.png" />
            </div>
            <div className="swiper-slide">
              <img className={Styles.swiper_slide} src="/gross_people_2.png" />
            </div>
            <div className="swiper-slide">
              <img className={Styles.swiper_slide} src="/gross_people_3.png" />
            </div>
            <div className="swiper-slide">
              <img className={Styles.swiper_slide} src="/gross_people_4.png" />
            </div>
            <div className="swiper-slide">
              <img className={Styles.swiper_slide} src="/gross_people_5.png" />
            </div>
            <div className="swiper-slide">
              <img className={Styles.swiper_slide} src="/gross_people_6.png" />
            </div>
            <div className="swiper-slide">
              <img className={Styles.swiper_slide} src="/gross_people_7.png" />
            </div>
          </div>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </div>
    );
  };

export { Comics, Comics2 }