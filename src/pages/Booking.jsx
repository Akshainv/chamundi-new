import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Users, MessageSquare, Info, ArrowRight, Award, Instagram, Facebook, Mail } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import './Booking.css';

// EmailJS Configuration
const EMAILJS_SERVICE_ID = 'service_cpjd2t6';
const EMAILJS_TEMPLATE_ID = 'template_kw9pyac';
const EMAILJS_PUBLIC_KEY = 'g29o6rhguUYNKXTAf';

const Booking = () => {
    const formRef = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        // Map purpose values to full display text
        const purposeLabels = {
            'class': 'Yoga Class / Session',
            'workshop': 'Workshop / Event',
            'private': 'Private Practice',
            'retreat': 'Retreat'
        };

        // Prepare template parameters
        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone,
            country: formData.country,
            date: formData.date,
            time: formData.time,
            duration: formData.duration,
            participants: formData.participants,
            purpose: purposeLabels[formData.purpose] || formData.purpose,
            requirements: formData.requirements,
        };

        try {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                templateParams,
                EMAILJS_PUBLIC_KEY
            );

            setSubmitStatus('success');
            toast.success('Booking request sent successfully! We will contact you shortly.');
            // Reset form
            setFormData({
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
        } catch (error) {
            console.error('EmailJS Error:', error);
            setSubmitStatus('error');
            toast.error('Failed to send request. Please try again or contact us directly.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div id="booking" className="booking-page">
            <header className="page-header booking-header">
                <div className="container">
                    <h1>Booking Form</h1>
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
                                <label>Special Requirements (Optional)</label>
                                <textarea
                                    rows="4"
                                    placeholder="Any specific equipment or setup needed?"
                                    value={formData.requirements}
                                    onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                                ></textarea>
                            </div>

                            {submitStatus === 'success' && (
                                <div className="form-message success">
                                    ✓ Booking request sent successfully! We will contact you shortly.
                                </div>
                            )}

                            {submitStatus === 'error' && (
                                <div className="form-message error">
                                    ✗ Failed to send request. Please try again or contact us directly.
                                </div>
                            )}

                            <button
                                type="submit"
                                className="btn btn-primary"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Submit Booking Request'}
                            </button>
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
