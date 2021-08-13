import './css/App.css';

import Intro from './pages/Intro';
import About from './pages/About';
import Achievements from './pages/Achievements';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

import Navbar from './components/Navbar';
import SocialAccounts from './components/SocialAccounts';

function App() {
  return (
    <div className="App">
      <div className="App__bar">
        <Navbar />
      </div>
      <div className="social__accounts">
        <SocialAccounts />
      </div>
      <Intro />
      <About />
      <Achievements />
      <Experience />
      {/* <Skills /> */}
      {/* <Projects /> */}
      <Contact />
    </div>
  );
}

export default App;
