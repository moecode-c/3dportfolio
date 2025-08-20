import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import "./contactsection.css";
import resumePdf from '../../assets/resume.pdf'; // import the PDF

const Contactsection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [formState, handleFormspreeSubmit] = useForm("meozbzwn");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleFormspreeSubmit(e);
    };

    return (
        <>
            <section className="contact-section">
                <h2 className="section-title">Get In Touch</h2>

                <div className="contact-container">
                    <div className="contact-info">
                        <div className="info-box">
                            <div id="contact" className="info-icon">✉️</div>
                            <h3>Email</h3>
                            <p>mohammedessameldinCS@gmail.com</p>
                        </div>

                        <div className="info-box">
                            <div className="info-icon">📍</div>
                            <h3>Location</h3>
                            <p>Cairo, Egypt</p>
                        </div>
                    </div>

                    <div className="contact-form-container">
                        {formState.succeeded ? (
                            <div className="success-message">
                                <h3>Message Sent!</h3>
                                <p>Thank you for reaching out! I'll get back to you soon.</p>
                                <button
                                    className="reset-button"
                                    onClick={() => window.location.reload()}
                                >
                                    Send Another Message
                                </button>
                            </div>
                        ) : (
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Your Name"
                                    />
                                    <ValidationError prefix="Name" field="name" errors={formState.errors} />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="Your Email"
                                    />
                                    <ValidationError prefix="Email" field="email" errors={formState.errors} />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        placeholder="Your Message"
                                        rows="5"
                                    />
                                    <ValidationError prefix="Message" field="message" errors={formState.errors} />
                                </div>

                                <button
                                    type="submit"
                                    className="submit-button"
                                    disabled={formState.submitting}
                                >
                                    {formState.submitting ? 'Sending...' : 'Send Message'}
                                </button>

                                <ValidationError errors={formState.errors} />
                            </form>
                        )}
                    </div>
                </div>
            </section>
            <a
                href={resumePdf}
                className="download-resume-btn"
                download
                title="Download Resume"
            >
                <span style={{ marginRight: '0.5em', fontSize: '1.2em', verticalAlign: 'middle' }}>📄</span>
                Download Resume
            </a>
        </>
    );
};

export default Contactsection;