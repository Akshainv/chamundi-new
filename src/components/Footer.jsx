import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-info">
                        <img src="/images/optimized/logo_chamundi.webp" alt="Chamundi Yoga" className="footer-logo" />
                        <p>Peaceful sanctuary for yoga, meditation, and wellness in the heart of Kerala.</p>
                        <div className="social-links">
                            <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                            <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                        </div>
                    </div>

                    <div className="footer-contact">
                        <h3>Quick Links</h3>
                        <ul className="footer-links" style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                            <li style={{ marginBottom: '0.8rem' }}><Link to="/faq" style={{ color: 'inherit', textDecoration: 'none', fontSize: '0.95rem' }}>Frequently Asked Questions</Link></li>
                            <li style={{ marginBottom: '0.8rem' }}><Link to="/#booking" style={{ color: 'inherit', textDecoration: 'none', fontSize: '0.95rem' }}>Book a Space</Link></li>
                        </ul>
                        <h3>Contact Us</h3>
                        <ul>
                            <li><Phone size={18} /> +91-XXXXXXXXXX</li>
                            <li><Mail size={18} /> info@keralayogaspaces.com</li>
                            <li><MapPin size={18} /> Kottayam, Kerala, India</li>
                        </ul>
                    </div>

                    <div className="footer-newsletter">
                        <h3>Newsletter</h3>
                        <p>Stay updated with our latest retreats and workshops.</p>
                        <form className="newsletter-form">
                            <input type="email" placeholder="Your email address" />
                            <button type="submit" className="btn-primary">Join</button>
                        </form>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Kerala Ayurveda Yoga Chamundi. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
