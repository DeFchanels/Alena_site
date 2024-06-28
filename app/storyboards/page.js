"use client";
import { ArtsSlider } from "../components/ArtsSlider/ArtsSlider";
import { useEffect } from "react";
import Swiper from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Video } from "../components/Video/Video";

export default function StoryboardsPage() {
  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 25000,
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
  const storyboards_slider_slides = [
    "/1.png",
    "/2.png",
    "/3.png",
    "/4.png",
    "/5.png",
    "/6.png",
    "/7.png",
    "/_1.png",
    "/_2.png",
    "/_3.png",
  ];
  const storyboards_slider_slides2 = [
    "/1 (1).png",
    "/2 (1).png",
    "/3 (1).png",
    "/4 (1).png",
    "/5 (1).png",
  ];
  return (
    <>
      <h1 style={{ marginLeft: "15%", fontSize: '45px'}}>
        Storyboards
      </h1>
      <h2 style={{ marginLeft: "15%", marginBottom: "-5%" }}>
        Smoke without fire
      </h2>
      <ArtsSlider slides={storyboards_slider_slides}/>
      <div className='storyboard_description'>
        <p>
          SMOKE WITHOUT FIRE
        </p>
        <p>Storyboards for a group short film</p>
      </div>
      <div>
        <div className='left_description'>
          <p style={{fontSize: '20px'}}>Animatic for "Smoke Without Fire"</p>
        </div>
        <Video path="video/Smoke animatic.mp4" clas="video" poster='posters/10_poster.png'/>
      </div>
      <h2 style={{ marginLeft: "15%", marginBottom: "-5%" }}>
        Homo Comfortus
      </h2>
      <ArtsSlider slides={storyboards_slider_slides2}/>
      <div className='storyboard_description_right'>
        <p>
        HOMO COMFORTUS
        </p>
        <p>Storyboards for a personal short film</p>
      </div>
      <div style={{width: '100%', marginLeft: '42%'}}>
        <Video path="video/Homo animatic.mp4" clas="video" poster='posters/11_poster.png'/>
        <div className='right_description'>
          <p style={{fontSize: '20px'}}>Animatic for "Homo Comfortus"</p>
        </div>
      </div>
    </>
  );
}
