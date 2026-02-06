import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Users, MessageSquare, Info, ArrowRight, Award, Instagram, Facebook, Mail } from 'lucide-react';
import './Booking.css';

const Booking = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        country: '',
        date: '',
        time: '',
        duration: '1',
        participants: '',
        purpose: 'class',
        requirements: '',
    });


    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Booking request submitted! We will contact you shortly to confirm.");
    };

    return (
        <div id="booking" className="booking-page">
            <header className="page-header booking-header">
                <div className="container">
                    <h1>Sadhana Space Booking</h1>
                    <p>Reserve your sanctuary for practice and growth.</p>
                </div>
            </header>

            <section className="booking-main">
                <div className="container grid-booking">
                    <div className="booking-form-container">
                        <h2>Booking Form</h2>
                        <form onSubmit={handleSubmit} className="booking-form">
                            <div className="form-group">
                                <label>Full Name <span className="required-star">*</span></label>
                                <input
                                    type="text"
                                    placeholder="Enter your full name"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Email Address <span className="required-star">*</span></label>
                                    <input
                                        type="email"
                                        placeholder="email@example.com"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Phone Number <span className="required-star">*</span></label>
                                    <input
                                        type="tel"
                                        placeholder="+91 XXXXX XXXXX"
                                        required
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Country <span className="required-star">*</span></label>
                                <input
                                    type="text"
                                    placeholder="Enter your country"
                                    required
                                    value={formData.country}
                                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                                />
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Choose Date <span className="required-star">*</span></label>
                                    <input
                                        type="date"
                                        required
                                        value={formData.date}
                                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Preferred Time <span className="required-star">*</span></label>
                                    <input
                                        type="time"
                                        required
                                        value={formData.time}
                                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Duration (Hours) <span className="required-star">*</span></label>
                                    <input
                                        type="number"
                                        min="1"
                                        placeholder="1"
                                        required
                                        value={formData.duration}
                                        onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>No. of Participants <span className="required-star">*</span></label>
                                    <input
                                        type="number"
                                        min="1"
                                        required
                                        value={formData.participants}
                                        onChange={(e) => setFormData({ ...formData, participants: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Purpose <span className="required-star">*</span></label>
                                <select required value={formData.purpose} onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}>
                                    <option value="class">Yoga Class / Session</option>
                                    <option value="workshop">Workshop / Event</option>
                                    <option value="private">Private Practice</option>
                                    <option value="retreat">Retreat</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Special Requirements <span className="required-star">*</span></label>
                                <textarea
                                    rows="4"
                                    placeholder="Any specific equipment or setup needed?"
                                    required
                                    value={formData.requirements}
                                    onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary">Submit Booking Request</button>
                        </form>
                    </div>

                    <div className="booking-sidebar">
                        <div className="sidebar-box connect-box">
                            <h3>Connect With Us</h3>
                            <div className="connect-links">
                                <a href="#" className="connect-item">
                                    <Instagram size={24} />
                                    <div>
                                        <strong>Instagram</strong>
                                        <span>@keralayogaspaces</span>
                                    </div>
                                </a>
                                <a href="#" className="connect-item">
                                    <Facebook size={24} />
                                    <div>
                                        <strong>Facebook</strong>
                                        <span>Kerala Ayurveda Yoga</span>
                                    </div>
                                </a>
                                <div className="connect-item no-link">
                                    <Mail size={24} />
                                    <div>
                                        <strong>Newsletter Signup</strong>
                                        <span>Stay updated with our events</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="sidebar-box visit-box">
                            <h3>Visit Us</h3>
                            <ul className="visit-list">
                                <li>Schedule a yoga hall tour</li>
                                <li>Book a trial yoga session</li>
                            </ul>
                        </div>

                        <div className="sidebar-box policies">
                            <h3><Info size={20} /> Booking Policies</h3>
                            <ul>
                                <li>Advance booking required for all slots.</li>
                                <li>Please arrive 10 minutes early.</li>
                                <li>Equipment must be handled with care.</li>
                                <li>Payments are required to secure the slot.</li>
                            </ul>
                        </div>

                        <div className="sidebar-box how-to">
                            <h3>How to Book</h3>
                            <ol>
                                <li>Choose your yoga hall and time</li>
                                <li>Submit the booking form</li>
                                <li>Receive confirmation by email</li>
                                <li>Make payment to secure slot</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            <section className="faq-section bg-light">
                <div className="container">
                    <div className="faq-redirect-card-enhanced">
                        <div className="redirect-content">
                            <h3>Explore Our Comprehensive FAQ Center</h3>
                            <p>For detailed information on arrival, sanctuary policies, and specialized retreat requirements, visit our official Knowledge Base.</p>
                            <Link to="/faq" className="btn btn-primary">
                                View Full FAQ Page <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Booking;
