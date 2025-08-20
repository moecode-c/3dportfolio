import { useState, useEffect, useRef } from "react";
import TargetCursor from "../../blocks/TargetCursor/TargetCursor";
import Spline from '@splinetool/react-spline';
import "./herosection.css";


const COMMENTS = [
    "Hello, my name is Mohamed!",
    "I am a fullstack web developer.",
    "Welcome to my website!", 
    "Let's build something amazing together!"
];

function Herosection() {
    const [messageIndex, setMessageIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [displayed, setDisplayed] = useState("");
    const heroRef = useRef(null);
    const [showSpline, setShowSpline] = useState(true);

    const TYPE_SPEED = 110;
    const DELETE_SPEED = 55;
    const HOLD_FULL = 1400;
    const HOLD_EMPTY = 300;

    useEffect(() => {
        const full = COMMENTS[messageIndex];
        let timeout;

        if (!isDeleting && charIndex < full.length) {
            timeout = setTimeout(() => {
                setDisplayed(full.slice(0, charIndex + 1));
                setCharIndex(charIndex + 1);
            }, TYPE_SPEED);
        } else if (!isDeleting && charIndex === full.length) {
            timeout = setTimeout(() => setIsDeleting(true), HOLD_FULL);
        } else if (isDeleting && charIndex > 0) {
            timeout = setTimeout(() => {
                setDisplayed(full.slice(0, charIndex - 1));
                setCharIndex(charIndex - 1);
            }, DELETE_SPEED);
        } else if (isDeleting && charIndex === 0) {
            timeout = setTimeout(() => {
                setIsDeleting(false);
                setMessageIndex(i => (i + 1) % COMMENTS.length);
            }, HOLD_EMPTY);
        }

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, messageIndex]);

    useEffect(() => {
        const observer = new window.IntersectionObserver(
            ([entry]) => setShowSpline(entry.isIntersecting),
            { threshold: 0.1 }
        );
        if (heroRef.current) observer.observe(heroRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <TargetCursor
                spinDuration={2}
                hideDefaultCursor={true}
            />
            <div id="about"></div>
            <div className="container" ref={heroRef}>
                <div className="left-hero">
                    <h1 className="comment">
                        {displayed}
                    </h1>


                    <p>
                        Web Developer at CTC MENA with strong skills in HTML,
                        CSS, JavaScript, React.js, Three.js, Tailwind, TypeScript, and
                        GitHub. Proficient in C++ and experienced in developing
                        interactive, performance-focused projects. Focused on creating
                        user-friendly web interfaces through a balance of technical
                        precision and design. Maintained a 3.8 GPA through consistent
                        effort and commitment to learning. Continuously improving
                        and building new solutions.
                    </p>

                </div>

                <div className="right-hero">
                    {showSpline && (
                        <Spline className="robot-3d"
                            scene="https://prod.spline.design/w5ImPMEwAAo3dfoE/scene.splinecode"
                        />
                    )}
                </div>
            </div>

            <div className="sections">
                <a href="#projects">
                    <span className="icon">🛠</span>
                    <span className="title">Projects</span>
                    <span className="tag">Work</span>
                    <span className="desc">Selected builds & experiments.</span>
                </a>
                <a href="#skills">
                    <span className="icon">⚙️</span>
                    <span className="title">Skills</span>
                    <span className="tag">Stack</span>
                    <span className="desc">Core technologies & tools.</span>
                </a>
                <a href="#about">
                    <span className="icon">👤</span>
                    <span className="title">About</span>
                    <span className="tag">Profile</span>
                    <span className="desc">Background & focus areas.</span>
                </a>
                <a href="#contact">
                    <span className="icon">✉️</span>
                    <span className="title">Contact</span>
                    <span className="tag">Reach</span>
                    <span className="desc">Get in touch quickly.</span>
                </a>
            </div>

            <div id="projects"></div>
            <div id="skills"></div>
            <div id="contact"></div>
        </>
    );
}

export default Herosection;

