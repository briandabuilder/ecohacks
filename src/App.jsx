import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Features from './components/Features'
import Countdown from './components/Countdown';
import Sponsors from './components/Sponsors';
import Schedule from './components/Schedule';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ScrollButton from './components/ScrollButton';

import Container from "react-bootstrap/Container";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Home />
            <Features />
            <Countdown />
            <Schedule />
            <FAQ />
            <Sponsors />
            <Footer />
            <ScrollButton />
        </div>
    );
}

export default App;
