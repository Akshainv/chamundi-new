import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { useEffect, lazy, Suspense, memo } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Lazy load page components for faster initial load
const Home = lazy(() => import('./pages/Home'));
const Studios = lazy(() => import('./pages/Studios'));
const Services = lazy(() => import('./pages/Services'));
const Booking = lazy(() => import('./pages/Booking'));
const About = lazy(() => import('./pages/About'));
const FAQ = lazy(() => import('./pages/FAQ'));

// Loading fallback
const PageLoader = () => (
    <div style={{
        minHeight: '50vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f9f9f7'
    }}>
        <div style={{
            width: '40px',
            height: '40px',
            border: '3px solid #e0e0e0',
            borderTop: '3px solid #5d8a54',
            borderRadius: '50%',
            animation: 'spin 0.8s linear infinite'
        }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
);

// Component to handle hash scrolling (memoized)
const ScrollToHash = memo(() => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else if (location.pathname === '/') {
            // Scroll to top when navigating to home without hash
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [location]);

    return null;
});

function App() {
    return (
        <Router>
            <ScrollToHash />
            <ToastContainer
                position="top-right"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <div className="app-container">
                <Header />
                <main>
                    <Suspense fallback={<PageLoader />}>
                        <Routes>
                            <Route path="/" element={
                                <>
                                    <Home />
                                    <Studios />
                                    <Services />
                                    <Booking />
                                    <About />
                                </>
                            } />
                            <Route path="/faq" element={<FAQ />} />
                        </Routes>
                    </Suspense>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
