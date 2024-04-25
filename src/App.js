import './App.css';
import { BrowserRouter as Router, Routes} from 'react-router-dom';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/client/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact Component={Home}></Route>
      </Routes>
        
    </Router>
    </>
  );
}

export default App;
