import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import FrontPage from './components/FrontPage';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <FrontPage />
      <About />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
