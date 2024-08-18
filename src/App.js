import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeBody from './components/HomeBody';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Login from './components/Login';
import CreatePost from './components/CreatePost';



export default function App() {
  // State to determine if the user is logged in
  // const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const [user, setUser] = useState({});
  
  return (
    <div className="App" style={{ fontFamily: "'League Spartan', sans-serif" }}>
      <Router> 
        <header className="App-header">
          <Navbar user={user} setUser={setUser}/>
          <Routes>
            <Route path="/" element={<HomeBody />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog user={user}/>} />
            <Route path="/login" element={<Login setUser={setUser}/>} />
            <Route path="/create-post" element={<CreatePost user={user} setUser={setUser}/>} />
          </Routes>
          <Footer /> 
        </header>
      </Router>
    </div>
  );
}
