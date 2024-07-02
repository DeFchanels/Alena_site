"use client";
import { ArtsSlider } from "../components/ArtsSlider/ArtsSlider";
import { useEffect } from "react";
import Swiper from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export default function IllustrationsPage() {
  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 10000,
        disableOnInteraction: false,
      },
      setTransition: true,
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
      allowTouchMove: false,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      modules: [Autoplay, Navigation, Pagination],
    });
  }, []);
  const art_slider_slides = [
    "/romeo_and_juliette.png",
    "/Wataru.png",
    "/Shaman.png",
    "/Cardswap.png",
    "/Xiao.png",
    "/Venti.png",
    "/Albedo.png",
  ];
  const character_slides = [
    "/hinao.png",
    "/character_design.png",
    "/character_sheet_edit.png",
    "/character_sketches_g.png",
    "/character_sketches.png",
    "/antoha.png",
    "/characters_final.png",
  ];
  const background_slides = [
    "/bg_1.png",
    "/bg7.png",
    "/bg10.png",
    "/entrance_faraway_14.png",
    "/picasso_room_4.png",
    "/painting_7.png",
  ];
  const comics_slides1 = [
    "/real_friendship_1.png",
    "/real_friendship_2.png",
    "/real_friendship_3.png",
    "/real_friendship_4.png",
  ];
  const comics_slides2 = [
    "/gross_people_1.png",
    "/gross_people_2.png",
    "/gross_people_3.png",
    "/gross_people_4.png",
    "/gross_people_5.png",
    "/gross_people_6.png",
    "/gross_people_7.png",
  ];
  return (
    <>
      <img className="collage" src="/collage.jpg" />
      <ArtsSlider slides={art_slider_slides} />
      <h1 className="ill_header1">
        Character design
      </h1>
      <div className="characters">
        <img src="/char1.png" />
        <img src="/char2.png" />
        <img src="/char3.png" />
      </div>
      <ArtsSlider slides={character_slides} additional_class="characters_slides" />
      <h1
        className="ill_header2"
      >
        Background Art
      </h1>
      <ArtsSlider slides={background_slides} additional_class="backgrounds" />
      <h1 className="ill_header3">
        Comics
      </h1>
      <ArtsSlider slides={comics_slides1} additional_class="comics2" />
      <ArtsSlider slides={comics_slides2} additional_class="comics2" />
    </>
  );
}
