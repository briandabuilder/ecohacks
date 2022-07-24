import './App.css';
import Hero from './components/Hero';
import Features from './components/Features';
import Format from './components/Format';
import Countdown from './components/Countdown';
import Sponsors from './components/Sponsors';
import Schedule from './components/Schedule';
import FAQ from './components/FAQ';

function App() {
    return (
        <div className="App">
            <Hero />
            <Features />
            <Format />
            <Countdown />
            <Schedule />
            <FAQ />
            <Sponsors />
        </div>
    );
}

export default App;
