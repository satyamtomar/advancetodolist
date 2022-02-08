import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import About from './components/About';
import Signup from './components/Signup';
import Home from './components/Home';
function App() {
  return (
    <>
     <Router>
          <Header />
          <Routes>
              <Route exact path="/about" key="about"  element={<About  />} />
       
              <Route exact path="/" key="home" element={<Home />} />
                
             
              <Route exact path="/login" element={<Login />} />
                
              

              <Route exact path="/signup" element={<Signup />} />
              </Routes>
          </Router>
    </>
  );
}

export default App;
