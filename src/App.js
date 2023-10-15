import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Body from './Body';
import Projects from './Projects';
import Blog from './Blog';
import CreateBlogPost from './CreateBlogPost';
import Login from './Login';
import { useState } from 'react';


function App() {

  const [isAuth, setIsAuth] = useState(false);
  return (
    <div className="App">
      <HashRouter>
        <header className="App-header">
          <Navbar setIsAuth={setIsAuth} isAuth={isAuth}/>
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/login" element={<Login setIsAuth={setIsAuth}/>} />

          </Routes>
          <Footer />
        </header>
      </HashRouter>
    </div>
  );
}

export default App;

