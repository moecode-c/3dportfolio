import "./projectsection.css";
import afterlifeMuseumImg from '../../assets/purple-background.webp';
import sunrisePyrImg from '../../assets/sunrisepyr.png';

const Projectssection = () => {
    const projects = [
        {
            id: 1,
            title: "Movieland",
            description: "A Netflix clone built with modern frontend technologies. Features include movie browsing, search functionality, and responsive design for all devices.",
            image: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            technologies: ["React", "Tailwind CSS", "API Integration", "JavaScript"],
            github: "https://github.com/moecode-c/MovieWorld",
        },
        {
            id: 2,
            title: "Pyramid Builder Game",
            description: "An interactive 3D game where users build and explore Egyptian pyramids. Features immersive scenes, physics-based interactions, and historical accuracy.",
            image: sunrisePyrImg,
            technologies: ["Three.js", "JavaScript", "WebGL", "3D Modeling"],
            github: "https://github.com/moecode-c/Pyramid-builder-game",
        },
        {
            id: 3,
            title: "Afterlife Museum",
            description: "A fictional Egyptian museum website with artifact galleries, virtual tours, and event booking system. Features both frontend and backend components.",
            image: afterlifeMuseumImg,
            technologies: ["HTML", "CSS", "JavaScript", "Node.js"],
            github: "#",
        }
    ];

    return (
        <section id="projects" className="projects-section">
            <h2 className="section-title">My Projects</h2>

            <div className="projects-container">
                {projects.map(project => (
                    <div className="project-card" key={project.id}>
                        <div className="project-image-container">
                            <div className="project-image" style={{ backgroundImage: `url(${project.image})` }}></div>
                            <div className="project-overlay">
                                <div className="project-links">
                                    <a href={project.github} className="project-link github-link" target="_blank" rel="noopener noreferrer">
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="project-content">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>

                            <div className="project-technologies">
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className="tech-badge">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projectssection;