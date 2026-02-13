import "./App.css";
import React, { useEffect, useState, useRef } from "react";
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
    "#FF9138",
    "#FF7A1A",
    "#FF5E1F",
    "#F24A2A",
    "#E63A2E",
    "#D93D20",
  ];

  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    try {
      if (playing) {
        audio.pause();
      } else {
        await audio.play(); // handles autoplay restrictions
      }
      setPlaying(!playing);
    } catch (err) {
      console.log("Audio play prevented by browser:", err);
    }
  };

  useEffect(() => {
    audioRef.current = new Audio(music);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.6;

    const sections = gsap.utils.toArray("#horizontal-container .content");

    // Horizontal scroll tween
    const horizontalTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: "#horizontal-container",
        pin: true,
        scrub: 1,
        end: () =>
          "+=" +
          document.querySelector("#horizontal-container").offsetWidth,
      },
    });

    // ACTIVE NAV INDICATOR (fixed)
    sections.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        containerAnimation: horizontalTween,
        start: "left center",
        end: "right center",
        onEnter: () => setActiveIndex(index),
        onEnterBack: () => setActiveIndex(index),
      });
    });

    // SPLITTYPE ANIMATION PER SECTION
    sections.forEach((section) => {
      const headings = section.querySelectorAll(".h-container");
      const paragraphs = section.querySelectorAll(".p-container");
      const listItems = section.querySelectorAll(".bondings li");

      if (headings.length) {
        const splitHeadings = new SplitType(headings, { types: "chars" });

        gsap.from(splitHeadings.chars, {
          y: 100,
          opacity: 0,
          stagger: 0.03,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            containerAnimation: horizontalTween,
            start: "left center",
            toggleActions: "play none none reset",
          },
        });
      }

      if (paragraphs.length) {
        const splitParagraphs = new SplitType(paragraphs, { types: "lines" });

        gsap.from(splitParagraphs.lines, {
          y: 50,
          opacity: 0,
          stagger: 0.08,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            containerAnimation: horizontalTween,
            start: "left center",
            toggleActions: "play none none reset",
          },
        });
      }

      if (listItems.length) {
        const splitList = new SplitType(listItems, { types: "words" });

        gsap.from(splitList.words, {
          y: 30,
          opacity: 0,
          stagger: 0.05,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            containerAnimation: horizontalTween,
            start: "left center",
            toggleActions: "play none none reset",
          },
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  return (
    <div>
      {/* NAVIGATION */}
      <div className="nav">
        <h6 style={{ color: sectionColors[activeIndex] }}>
          February 2026
        </h6>

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
          onClick={toggleMusic}
        >
          {playing ? (
            <BiSolidVolumeFull color={sectionColors[activeIndex]} />
          ) : (
            <BiSolidVolumeMute color={sectionColors[activeIndex]} />
          )}
        </button>
      </div>

      {/* HORIZONTAL SCROLL */}
      <div id="horizontal-container">
        <div className="content">
          <div className="start">
            <div className="h-container">Monthsary Checkpoint</div>
            <div className="p-container">
              Look back at the memories we've spent together for this month.
            </div>
          </div>
        </div>

        <div className="content">
          <div className="days">
            <p className="p-container">Time spent since June 16</p>
            <h1 className="h-container">5,832 hours</h1>
            <p className="p-container">
              filled with laughter, stories, quiet moments, and memories I’ll always treasure.
            </p>
          </div>
        </div>

        <div className="content">
          <div className="moments">
            <div className="img-gallery">
              <img id="img" src={Image1} alt="" />
              <img id="img" src={Image2} alt="" />
              <img id="img" src={Image3} alt="" />
            </div>
          </div>
        </div>

        <div className="content">
          <div className="bondings">
            <div>
              <p className="p-container">Highlights of the Month</p>
              <h1 className="h-container">Sweet Moments</h1>
              <p className="p-container">
                From late-night Call of Duty matches to laughing across the badminton, this month was simple but special. Every game, every rally, every shared smile reminded me that the best part of it all is loving you.
              </p>
            </div>

            <ul>
              <li><span>#1</span> Call of Duty Mobile</li>
              <li><span>#2</span> Netflix</li>
              <li><span>#3</span> Badminton</li>
            </ul>
          </div>
        </div>

        <div className="content">
          <div className="message">
            <p className="p-container">To my beloved</p>
            <h1 className="h-container">Baby Ellie</h1>
            <p className="p-container">
              It’s been 8 months since we chose each other, and I just want to say thank you for loving me the way you do every single day. This month meant so much to me. No matter what challenges come our way, we can always fix it as long as we hold on to each other.
              <br />
              <br />
              We laughed, we played, we had fun, and we loved each other in the simplest but sweetest ways. Those moments reminded me why I’m so lucky to have you.
              <br />
              <br />
              Let’s keep making memories together, one day at a time. I love you so, so much.
            </p>
          </div>
        </div>

        <div className="content">
          <div className="end">
            <div className="p-container">Happy Monthsary and Happy Valentines</div>
            <h1 className="h-container">I Love you Babyyy!</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
