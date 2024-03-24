
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import About from './routes/About';
import Service from './routes/Service';
import Contact from './routes/Contact';
import Login from './routes/Login';
import TravelPlan from './component/TravelPlan';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="/about" element={ <About/>}/>
        <Route path="/service" element={ <Service/>}/>
        <Route path="/contact" element={ <Contact/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="travelplan" element={<TravelPlan/>}/>
      </Routes>
    
   
     
      
    </div>
  );
}

export default App;
