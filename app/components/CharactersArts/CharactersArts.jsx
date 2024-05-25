
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Styles from "./CharactersArts.module.css";

export const CharactersArts = () => {
  return (
    <div className={Styles.page}>
      <div className=" swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img
              className={Styles.swiper_slide}
              src="/hinao.png"
            />
          </div>
          <div className="swiper-slide">
            <img className={Styles.swiper_slide} src="/character_design.png" />
          </div>
          <div className="swiper-slide">
            <img className={Styles.swiper_slide} src="/character_sheet_edit.png" />
          </div>
          <div className="swiper-slide">
            <img className={Styles.swiper_slide} src="/character_sketches_g.png" />
          </div>
          <div className="swiper-slide">
            <img className={Styles.swiper_slide} src="/character_sketches.png" />
          </div>
          <div className="swiper-slide">
            <img className={Styles.swiper_slide} src="/antoha.png" />
          </div>
          <div className="swiper-slide">
            <img className={Styles.swiper_slide} src="/characters_final.png" />
          </div>
        </div>
        <div className="swiper-pagination"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    </div>
  );
};
