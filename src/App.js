import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from './components/Header';
import Hero from './components/Hero';
import BestNft from './components/BestNft';
import Top3NFTs from './components/Top3NFTs';
import AboutAntonym from './components/AboutAntonym';
import AboutFeatures from './components/AboutFeatures';
import TakashiMurakami from './components/TakashiMurakami';
import MostAnticipated from './components/MostAnticipated';

function App() {
  return (
    <>
     <Header/>
     <Hero/>
     <BestNft/>
    <Top3NFTs/> 
    <AboutAntonym/>
    <AboutFeatures/>
    <TakashiMurakami/>
    <MostAnticipated/>
    </>
  );
}

export default App;
