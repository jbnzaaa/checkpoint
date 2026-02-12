import { React, useRef, useState } from 'react'
import { useLocation,NavLink  } from 'react-router-dom';
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
import music from "../assets/music/Wieee.mp3";

function Navbar() {
  const location = useLocation();

  const audioRef = useRef(new Audio(music));
  const [playing, setPlaying] = useState(false);

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

  const pageColors = {
    "/": "#FF9138",
    "/days": "#FF7A1A",
    "/moments": "#FF5E1F",
    "/bondings": "#F24A2A",
    "/message": "#E63A2E",
    "/end": "#D93D20",
  };

  const activeColor = pageColors[location.pathname] || "#373737";

  const iconColor = (path) =>
  location.pathname === path ? activeColor : "#373737";

  return (
    <div>
      <div class="nav">
        <h6 style={{ color: activeColor }}>scelerisque</h6>
        <ul>
          <li>
            <NavLink to="/">
              <BiSolidHomeHeart class="nav-icon" color={iconColor("/")}/> 
            </NavLink>
          </li>
          <li>
            <NavLink to="/days">
              <BiSolidCalendarHeart class="nav-icon" color={iconColor("/days")}/>
            </NavLink>
          </li>
          <li>
            <NavLink to="/moments">
              <BiSolidParty class="nav-icon" color={iconColor("/moments")}/>
            </NavLink>
            </li>
          <li>
            <NavLink to="/bondings">
              <BiSolidBookHeart class="nav-icon" color={iconColor("/bondings")}/>
            </NavLink>
          </li>
          <li>
            <NavLink to="/message">
              <BiSolidMessageDetail class="nav-icon" color={iconColor("/message")}/>
            </NavLink>
          </li>
          <li>
            <NavLink to="/end">
              <BiSolidFlagAlt class="nav-icon" color={iconColor("/end")}/>
            </NavLink>
          </li>
        </ul>
        <button
          class="btn-link"
          style={{
            border: `2px solid ${activeColor}`,
            boxShadow: `5px 5px 0 ${activeColor}`,
            background: `#0E0E0C`
          }}
          onClick={(e) => {
            e.preventDefault();
            toggleMusic();
          }}
        >
          {playing ? (
            <BiSolidVolumeFull
              class="nav-icon"
              color={activeColor}
            />
          ) : (
            <BiSolidVolumeMute
              class="nav-icon"
              color={activeColor}
            />
          )}
        </button>
      </div>
    </div>

    // <Icon1 class="nav-icon" />
  )
}

export default Navbar