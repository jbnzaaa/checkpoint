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
import Image1 from "./assets/img/img1.jpg";
import Image2 from "./assets/img/img3.jpg";
import Image3 from "./assets/img/img6.jpeg";
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
        // markers: true,
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
        <h6 style={{ color: sectionColors[activeIndex] }}>February 2026</h6>

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
              Monthsary Checkpoint
            </div>
            <div className="p-container" ref={textRef}>
              Look back at the memories we've spent together for this month.
            </div>
          </div>
        </div>

        {/* Days */}
        <div className="content">
          <div className="days">
            <p className="p-container" ref={textRef}>Time spent since June 16</p>
            <h1 className="h-container" ref={textRef}>5,832 hours</h1>
            <p className="p-container" ref={textRef}>filled with laughter, stories, quiet moments, and memories I’ll always treasure.</p>
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
              <img id='img' src={Image1} alt="" />
              <img id='img' src={Image2} alt="" />
              <img id='img' src={Image3} alt="" />
            </div>
          </div>
        </div>

        {/* Bonding */}
        <div className="content">
          <div className="bondings">
            <div>
              <p className="p-container" ref={textRef}>Highlights of the Month</p>
              <h1 className="h-container" ref={textRef}>Sweet Moments</h1>
              <p className="p-container" ref={textRef}>From late-night Call of Duty: Mobile matches to laughing across the
        badminton, this month was simple but special. Every game, every
        rally, every shared smile reminded me that the best part of it all is
        loving you.</p>
            </div>
            <ul>
              <li ref={textRef}><span>#1</span>Call of Duty Mobile</li>
              <li ref={textRef}><span>#3</span>Badminton</li>
              <li ref={textRef}><span>#2</span>Netflix</li>
            </ul>
          </div>
        </div>

        {/* Message */}
        <div className="content">
          <div className="message">
            <p className="p-container" ref={textRef}>To my beloved</p>
            <h1 className="h-container" ref={textRef}>Baby Ellie</h1>
            <p className="p-container" ref={textRef}>
              It’s been 8 months since we chose each other, and I just want to say thank you for loving me the way you do every single day. This month meant so much to me. It showed me that no matter how hard things get or what challenges come our way, we can always fix it as long as we hold on to each other.

We laughed, we played, we had fun, and we loved each other in the simplest but sweetest ways. Those moments reminded me why I’m so lucky to have you.

Let’s keep making memories together, one day at a time, until our hair turns gray and we’re still teasing and loving each other the same way. I love you so, so much, baby.
            </p>
          </div>
        </div>

        {/* End */}
        <div className="content">
          <div className="end">
              <div className="p-container">Happy Monthsary and Happy Valentines</div>
              <h1 className="h-container" ref={textRef}>I Love you Babyyy!</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App