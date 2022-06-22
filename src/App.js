import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Features from './components/Features'
import Countdown from './components/Countdown';
import Sponsors from './components/Sponsors';
import Schedule from './components/Schedule';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Features />
      <Countdown />
      <Sponsors />
      <Schedule />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
