import './App.css';
import { BrowserRouter as Router, Routes} from 'react-router-dom';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/client/Home';
import Categories from './pages/client/Categories';
import Article from './pages/client/Article';
import NewArticle from './pages/admin/NewArticle';
import Dashboard from './pages/admin/Dashboard';
import Articles from './pages/admin/Articles';
import UserManagement from './pages/admin/UserManagement';
import Login from './pages/client/Login';
import Signup from './pages/client/Signup';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' exact Component={Home}></Route>
        <Route path='/Login' exact Component={Login}></Route>
        <Route path='/Sign-up' exact Component={Signup}></Route>
        <Route path='/Articles' exact Component={Categories}></Route>
        <Route path="/Article" exact Component={Article}></Route>
        <Route path="/New-Article" exact Component={NewArticle}></Route>
        <Route path="/Admin-dashboard/home" exact Component={Dashboard}></Route>
        <Route path="/Admin-dashboard/Articles" exact Component={Articles}></Route>
        <Route path="/Admin-dashboard/Users" exact Component={UserManagement}></Route>
      </Routes>
        
    </Router>
    </>
  );
}

export default App;
