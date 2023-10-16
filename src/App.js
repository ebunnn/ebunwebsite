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

  // state to determine if the user is logged in
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  return (
    <div className="App">
      <HashRouter>
        <header className="App-header">
          <Navbar setIsAuth={setIsAuth} isAuth={isAuth}/>
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/projects" element={<Projects />} />
            {/* Passing isAuth in as props */}
            <Route path="/blog" element={<Blog isAuth={isAuth}/>} />
            <Route path="/login" element={<Login setIsAuth={setIsAuth}/>} />
            <Route path="/create-blog-post" element={<CreateBlogPost isAuth={isAuth}/>} />
          </Routes>
          <Footer />
        </header>
      </HashRouter>
    </div>
  );
}

export default App;

