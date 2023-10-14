import './App.css';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Intro from './Components/IntroPage/Intro'

function App() {
  return (
    <div className="App">
      <div className='landingpage'>
        <Navbar/>
        <Hero/>
      </div>
      <Intro/>
    </div>
  );
}

export default App;
