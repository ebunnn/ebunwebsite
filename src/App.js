import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Body from './Body';
import Projects from './Projects';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <Navbar />
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/Projects" element={<Projects />} />
          </Routes>
          <Footer />
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
