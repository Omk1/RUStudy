import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";


import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Groups from "./Components/Groups";
import LoginPage from "./Components/LoginPage";
import RoutesTaken from "./Components/RoutesTaken";


function App() {
  return (
    
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path = "/Groups" element= {<Groups />}/>
          <Route path="/LoginPage" element={<LoginPage />} />
        </Routes>
        

        
        
        
          

        
      </div>
    </Router>
  );
}

export default App;
