import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import Index from './pages/Index';
import G1About from './pages/g1/About';
import G1Map from './pages/g1/Map';
import G2About from './pages/g2/About';
import G2Map from './pages/g2/Map';
import G3About from './pages/g3/About';
import G3Map from './pages/g3/Map';
import G4About from './pages/g4/About';
import G4Map from './pages/g4/Map';
import G5About from './pages/g5/About';
import G5Map from './pages/g5/Map';
import G6About from './pages/g6/About';
import G6Map from './pages/g6/Map';
import G7About from './pages/g7/About';
import G7Map from './pages/g7/Map';
import G8About from './pages/g8/About';
import G8Map from './pages/g8/Map';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Index/>} />

          <Route path="/g1" element={<G1About/>} />
          <Route path="/g1/map" element={<G1Map/>} />

          <Route path="/g2" element={<G2About/>} />
          <Route path="/g2/map" element={<G2Map/>} />

          <Route path="/g3" element={<G3About/>} />
          <Route path="/g3/map" element={<G3Map/>} />

          <Route path="/g4" element={<G4About/>} />
          <Route path="/g4/map" element={<G4Map/>} />

          <Route path="/g5" element={<G5About/>} />
          <Route path="/g5/map" element={<G5Map/>} />

          <Route path="/g6" element={<G6About/>} />
          <Route path="/g6/map" element={<G6Map/>} />

          <Route path="/g7" element={<G7About/>} />
          <Route path="/g7/map" element={<G7Map/>} />

          <Route path="/g8" element={<G8About/>} />
          <Route path="/g8/map" element={<G8Map/>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
