"use client";
import { ArtsSlider } from "../components/ArtsSlider/ArtsSlider";
import { CharactersArts } from "../components/CharactersArts/CharactersArts";
import { useEffect } from "react";
import Swiper from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { BackgroundArts } from "../components/BackgroundArts/BackgroundArts";
import { Comics, Comics2 } from "../components/Comics/Comics";

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
  return (
    <>
      <img className='collage' src='/collage.jpg' />
      <ArtsSlider />
      <h1 style={{ height: "20%", marginLeft: "15%", marginTop: "-5%" }}>
        Character design
      </h1>
      <div className="characters">
        <img src="/char1.png" />
        <img src="/char2.png" />
        <img src="/char3.png" />
      </div>
      <CharactersArts />
      <BackgroundArts />
      <h1 style={{ height: "20%", marginLeft: "11%", marginBottom: "-5%" }}>
        Comics
      </h1>
      <Comics />
      <Comics2 />
    </>
  );
}
