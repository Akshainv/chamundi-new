import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Studios from './pages/Studios';
import Services from './pages/Services';
import Booking from './pages/Booking';
import About from './pages/About';
import FAQ from './pages/FAQ';
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="app-container">
                <Header />
                <main>
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
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
