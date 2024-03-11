import HamNav from './components/HamNav';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Explore from './pages/Explore';

function App() {
  return (
    <>
    <Router>
    <HamNav />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/explore' element={<Explore />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
