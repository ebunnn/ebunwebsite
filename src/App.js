import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import Navbar from './Navbar';
import Footer from './Footer';
import Body from './Body';
import Projects from './Projects';
import Blog from './Blog';
import Login from './Login';
import { useState } from 'react';
import CreatePost from './CreatePost';



export default function App() {
  // State to determine if the user is logged in
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));


  return (
    <div className="App">
      <Router> 
        <header className="App-header">
          <Navbar setIsAuth={setIsAuth} isAuth={isAuth}/>
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog isAuth={isAuth}/>} />
            <Route path="/login" element={<Login setIsAuth={setIsAuth}/>} />
            <Route path="/create-post" element={<CreatePost isAuth={isAuth}/>} />
            {/* <Route path="/create-blog-post" element={<CreateBlogPost isAuth={isAuth}/>} /> */}
            
          </Routes>
          <Footer /> 
        </header>
      </Router>
    </div>
  );
}
