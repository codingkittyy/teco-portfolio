import './app.scss';
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import Blog from './components/Blog/Blog';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className='sections'>
          <Home />
          <Portfolio />
          <Blog />
          <About />
      </div>
    </div>
  );
}

export default App;
