import './App.css';
import { HashRouter as Router, Routes, Route} from 'react-router-dom'; // Import HashRouter
import Navbar from './Navbar';
import Footer from './Footer';
import Body from './Body';
import Projects from './Projects';
import Blog from './Blog';
import CreateBlogPost from './CreateBlogPost';
import Login from './Login';
import { useState } from 'react';



export default function App() {
  // State to determine if the user is logged in
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));


  return (
    <div className="App">
      <Router> {/* Wrap your application with HashRouter */}
        <header className="App-header">
          <Navbar setIsAuth={setIsAuth} isAuth={isAuth}/>
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog isAuth={isAuth}/>} />
            <Route path="/login" element={<Login setIsAuth={setIsAuth}/>} />
            <Route path="/create-blog-post" element={<CreateBlogPost isAuth={isAuth}/>} />
          </Routes>
          <Footer /> 
        </header>
      </Router>
    </div>
  );
}
