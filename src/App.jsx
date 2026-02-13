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

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(null); // Audio reference
  const containerRef = useRef(null); // GSAP container reference

  // Preload audio on mount
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
    }
  }, []);

  // Play/pause audio handler
  const toggleAudio = async () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        await audioRef.current.play(); // async for modern browsers
      }
      setIsPlaying(!isPlaying);
    } catch (err) {
      console.log("Audio play failed:", err);
    }
  };

  // GSAP horizontal scroll & animations
  useEffect(() => {
    if (!containerRef.current) return;

    const sections = containerRef.current.querySelectorAll(".content");
    if (!sections.length) return;

    const horizontalTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        end: () => "+=" + containerRef.current.offsetWidth,
      },
    });

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
    };
  }, []);

  return (
    <div>
      {/* Audio element */}
      <audio ref={audioRef} src={music} preload="auto" />

      {/* NAVIGATION */}
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

        {/* Audio toggle button */}
        <button
          className="btn-link"
          style={{
            border: `2px solid ${sectionColors[activeIndex]}`,
            boxShadow: `5px 5px 0 ${sectionColors[activeIndex]}`,
            background: "#0E0E0C",
          }}
          onClick={toggleAudio}
        >
          {isPlaying ? (
            <BiSolidVolumeFull color={sectionColors[activeIndex]} />
          ) : (
            <BiSolidVolumeMute color={sectionColors[activeIndex]} />
          )}
        </button>
      </div>

      {/* HORIZONTAL SCROLL */}
      <div id="horizontal-container" ref={containerRef}>
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
              filled with laughter, stories, quiet moments, and memories I’ll
              always treasure.
            </p>
          </div>
        </div>

        <div className="content">
          <div className="moments">
            <div className="img-gallery">
              <img src={Image1} alt="" />
              <img src={Image2} alt="" />
              <img src={Image3} alt="" />
            </div>
          </div>
        </div>

        <div className="content">
          <div className="bondings">
            <div>
              <p className="p-container">Highlights of the Month</p>
              <h1 className="h-container">Sweet Moments</h1>
              <p className="p-container">
                From late-night Call of Duty matches to laughing across the
                badminton, this month was simple but special.
              </p>
            </div>

            <ul>
              <li>
                <span>#1</span> Call of Duty Mobile
              </li>
              <li>
                <span>#2</span> Netflix
              </li>
              <li>
                <span>#3</span> Badminton
              </li>
            </ul>
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
