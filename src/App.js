import './App.css';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Intro from './Components/IntroPage/Intro';
import Footer from './Components/Footer/Footer';
import Subscribe from './Components/Subscribe/Subscribe';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Intro/>
      <Subscribe/>
      <Footer/>
      
    </div>

  );
}

export default App;
