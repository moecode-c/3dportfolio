import linkedinIcon from '../../assets/square-linkedin-brands-solid-full.svg';
import youtubeIcon from '../../assets/youtube-brands-solid-full.svg';
import envelopeIcon from '../../assets/envelope-solid-full.svg';
import githubIcon from '../../assets/github-brands-solid-full.svg';
import './footer.css';


function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__top">

        <div className="footer__brand">
          <h2>Mohammed Essam</h2>
          <p>Building interactive web experiences & 3D interfaces.</p>
        </div>

        <div className="footer__nav">
          <h3>NAV</h3>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer__contact">
          <h3>CONTACT</h3>
          <a className="footer__email" href="mailto:mohammedessameldinCS@gmail.com">
            <img src={envelopeIcon} alt="Email" />
            mohammedessameldinCS@gmail.com
          </a>
        </div>

        <div className="footer__social">
          <h3>SOCIAL</h3>
          <div className="footer__social-icons">
            <a href='https://www.linkedin.com/in/mohammed-essam-el-din-716b64364/'
              target='_blank'
              rel='noopener noreferrer'
              className="footer__social-icon">
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
            <a href="https://github.com/moecode-c"
              target='_blank'
              rel='noopener noreferrer'
              className="footer__social-icon">
              <img src={githubIcon} alt="GitHub" />
            </a>
            <a href="https://www.youtube.com/@codingtutorialMIU"
              target='_blank'
              rel='noopener noreferrer'
              className="footer__social-icon">
              <img src={youtubeIcon} alt="YouTube" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer__divider" />

      <div className="footer__bottom">
        <span>© {year} Mohammed Essam. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;