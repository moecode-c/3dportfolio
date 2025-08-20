import linkedinIcon from '../../assets/square-linkedin-brands-solid-full.svg';
import youtubeIcon from '../../assets/youtube-brands-solid-full.svg';
import envelopeIcon from '../../assets/envelope-solid-full.svg';
import envelopeOpenIcon from '../../assets/envelope-open-solid-full.svg';
import githubIcon from '../../assets/github-brands-solid-full.svg';
import "./header.css";
import "animate.css";
import { useState } from 'react';

function Header() {
  const [hovered, setHovered] = useState(false);
  const [tooltip, setTooltip] = useState("");

  return (
    <header className="site-header">
      <nav>
        <div className='headname'>
          <h1 className='animate__animated animate__fadeIn'>Mohammed Essam</h1>
        </div>
        <div className='right-nav'>

          <div>
            <a
              href='https://www.linkedin.com/in/mohammed-essam-el-din-716b64364/'
              target='_blank'
              rel='noopener noreferrer'
              onMouseEnter={() => setTooltip("LinkedIn")}
              onMouseLeave={() => setTooltip("")}
            >
              <img src={linkedinIcon} alt="LinkedIn" className="icon-linkedin" />
              Linkedin
            </a>
            {tooltip === "LinkedIn" ? <span className="nav-tooltip">LinkedIn</span> : null}
          </div>

          <div>
            <a
              href='https://www.youtube.com/@codingtutorialMIU'
              target='_blank'
              rel='noopener noreferrer'
              onMouseEnter={() => setTooltip("YouTube")}
              onMouseLeave={() => setTooltip("")}
            >
              <img src={youtubeIcon} alt="YouTube" className="icon-youtube" />
              Youtube
            </a>
            {tooltip === "YouTube" ? <span className="nav-tooltip">YouTube</span> : null}
          </div>

          <div>
            <a
              href="mailto:mohammedessameldinCS@gmail.com"
              target='_blank'
              rel='noopener noreferrer'
              onMouseEnter={() => { setHovered(true); setTooltip("Email") }}
              onMouseLeave={() => { setHovered(false); setTooltip("") }}
            >
              <img src={hovered ? envelopeOpenIcon : envelopeIcon} alt="Email" className="icon-email" />
              Email
            </a>
            {tooltip === "Email" ? <span className="nav-tooltip">Send Email</span> : null}
          </div>

          <div>
            <a
              href='https://github.com/moecode-c'
              target='_blank'
              rel='noopener noreferrer'
              onMouseEnter={() => setTooltip("Github")}
              onMouseLeave={() => setTooltip("")}
            >
              <img src={githubIcon} alt="Github" className="icon-github" />
              Github
            </a>
            {tooltip === "Github" ? <span className="nav-tooltip">Github</span> : null}
          </div>

        </div>
      </nav>
    </header>
  );
}


export default Header;
