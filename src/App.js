import './App.css';
import { BrowserRouter as Router, Routes} from 'react-router-dom';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/client/Home';
import Navbar from './components/Navbar';
import Categories from './pages/client/Categories';
import Article from './pages/client/Article';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact Component={Home}></Route>
        <Route path='/Articles' exact Component={Categories}></Route>
        <Route path="/Article" exact Component={Article}></Route>
      </Routes>
        
    </Router>
    </>
  );
}

export default App;
