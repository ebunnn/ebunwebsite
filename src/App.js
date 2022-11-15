import './App.css';
import Navbar from './Navbar'
import profImage from "./images/Professional_Pic.jpg"
import Footer from "./Footer"
import Body from "./Body"

function App() {
  return (
    <div className="App">
      <header className="App-header">   
        <Navbar />
        <img className="app--image" alt="" src={profImage}/>
        <Body />
        <Footer />
      </header>
    </div>
  );
}

export default App;
