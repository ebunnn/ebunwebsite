import './App.css';
import Navbar from './Navbar'
import Footer from "./Footer"
import Body from "./Body"


function App() {
  return (
    <div className="App">
      <header className="App-header">   
        <Navbar />
        <Body />
        <Footer />
      </header>
    </div>
  );
}

export default App;
