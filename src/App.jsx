import './App.css'
import { React, useEffect, useRef, useState } from 'react'
import {
  BiSolidHomeHeart,
  BiSolidCalendarHeart,
  BiSolidParty,
  BiSolidBookHeart,
  BiSolidMessageDetail,
  BiSolidFlagAlt,
  BiSolidVolumeFull,
  BiSolidVolumeMute,
} from "react-icons/bi";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import music from "./assets/music/Wieee.mp3";
gsap.registerPlugin(ScrollTrigger);

function App() {
  const sectionColors = [
    "#FF9138", // 1. start
    "#FF7A1A", // 2. days
    "#FF5E1F", // 3. moments
    "#F24A2A", // 4. bondings
    "#E63A2E", // 5. message
    "#D93D20", // 6. end
  ];

  const textRef = useRef(null);

  const audioRef = useRef(new Audio(music));
  const [playing, setPlaying] = useState(false);

  const [activeIndex, setActiveIndex] = useState(0);

  const toggleMusic = () => {
    const audio = audioRef.current;

    if (playing) {
      audio.pause();
    } else {
      audio.loop = true;
      audio.play();
    }

    setPlaying(!playing);
  };
  
  useEffect(() => {
    const sections = gsap.utils.toArray("#horizontal-container .content");
    const icons = gsap.utils.toArray(".nav-icon");

    const horizontalTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: "#horizontal-container",
        pin: true,
        scrub: 1,
        end: () =>
          "+=" + document.querySelector("#horizontal-container").offsetWidth,
      },
    });

    sections.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        containerAnimation: horizontalTween,
        markers: true,
        start: "center center",
        end: "center center",
        onEnter: () => setActiveIndex(index),
        onEnterBack: () => setActiveIndex(index),
      });
    });

    return () => {
      ScrollTrigger.killAll();
    };
}, []);

  return (
    <div>
      <div className="nav">
        <h6 style={{ color: sectionColors[activeIndex] }}>scelerisque</h6>

        <ul>
          <li>
            <BiSolidHomeHeart
              className="nav-icon"
              style={{
                color: activeIndex === 0 ? sectionColors[0] : "#373737",
              }}
            />
          </li>
          <li>
            <BiSolidCalendarHeart
              className="nav-icon"
              style={{
                color: activeIndex === 1 ? sectionColors[1] : "#373737",
              }}
            />
          </li>
          <li>
            <BiSolidParty
              className="nav-icon"
              style={{
                color: activeIndex === 2 ? sectionColors[2] : "#373737",
              }}
            />
          </li>
          <li>
            <BiSolidBookHeart
              className="nav-icon"
              style={{
                color: activeIndex === 3 ? sectionColors[3] : "#373737",
              }}
            />
          </li>
          <li>
            <BiSolidMessageDetail
              className="nav-icon"
              style={{
                color: activeIndex === 4 ? sectionColors[4] : "#373737",
              }}
            />
          </li>
          <li>
            <BiSolidFlagAlt
              className="nav-icon"
              style={{
                color: activeIndex === 5 ? sectionColors[5] : "#373737",
              }}
            />
          </li>
        </ul>

        <button
          className="btn-link"
          style={{
            border: `2px solid ${sectionColors[activeIndex]}`,
            boxShadow: `5px 5px 0 ${sectionColors[activeIndex]}`,
            background: "#0E0E0C",
          }}
          onClick={(e) => {
            e.preventDefault();
            toggleMusic();
          }}
        >
          {playing ? (
            <BiSolidVolumeFull color={sectionColors[activeIndex]} />
          ) : (
            <BiSolidVolumeMute color={sectionColors[activeIndex]} />
          )}
        </button>
      </div>

      <div id="horizontal-container">

        {/* Start */}
        <div className="content">
          <div className="start">
            <div className="h-container" ref={textRef}>
              Nunc scelerisque amet
            </div>
            <div className="p-container" ref={textRef}>
              Egestas bibendum
            </div>
          </div>
        </div>

        {/* Days */}
        <div className="content">
          <div className="days">
            <p className="p-container" ref={textRef}>Egestas bibendum</p>
            <h1 className="h-container" ref={textRef}>5,640 hours</h1>
            <p className="p-container" ref={textRef}>Lorem ipsum dolor sit amet consectetur. Semper at a quis sed id. Ipsum mi leo ultrices cursus ac. Erat aliquet ultrices eget auctor quisque feugiat. Egestas eget nisl.</p>
          </div>
        </div>

        {/* Moments */}
        <div className="content">
          <div className="moments">
            {/* <div>
              <p className="p-container" ref={textRef}>Elementum pharetra</p>
              <h1 className="h-container" ref={textRef}>tempor libero</h1>
              <p className="p-container" ref={textRef}>Sollicitudin dui sem eget proin ornare ut laoreet eget. Donec a malesuada accumsan et. Et maecenas ullamcorper semper id.</p>
            </div> */}
            <div className="img-gallery">
              <img id='img' src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=" alt="" />
              <img id='img' src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=" alt="" />
              <img id='img' src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=" alt="" />
            </div>
          </div>
        </div>

        {/* Bonding */}
        <div className="content">
          <div className="bondings">
            <div>
              <p className="p-container" ref={textRef}>Aliquet posuere</p>
              <h1 className="h-container" ref={textRef}>Nibh et imperdi</h1>
              <p className="p-container" ref={textRef}>Neque ultrices lectus dolor amet et aliquam non amet condimentum. In vel id semper tortor malesuada erat id tellus sapien. Sapien diam id iaculis cursus vel ut porttitor nulla adipiscing. </p>
            </div>
            <ul>
              <li ref={textRef}>Call of Duty Mobile</li>
              <li ref={textRef}>Netflix</li>
              <li ref={textRef}>Badminton</li>
            </ul>
          </div>
        </div>

        {/* Message */}
        <div className="content">
          <div className="message">
            <p className="p-container" ref={textRef}>Aliquet posuere</p>
            <h1 className="h-container" ref={textRef}>Pulvinar in purus</h1>
            <p className="p-container" ref={textRef}>Viverra at tempus donec id porttitor fermentum. Gravida malesuada vitae turpis ac ultricies volutpat odio nisl aliquet. Mattis egestas mi enim auctor turpis. Risus sed eu blandit vulputate magna. Vel volutpat ultrices vulputate sed odio mauris ridiculus. Quis velit nullam eget egestas id ut viverra pellentesque. Nulla id faucibus nulla parturient dictum dui a. Commodo nec quis tortor etiam quis. Aliquam sodales ipsum pretium dictum. </p>
          </div>
        </div>

        {/* End */}
        <div className="content">
          <div className="end">
              <h1 className="h-container" ref={textRef}>ipsum pretium dictum</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App