import {BrowserRouter as Router, Route} from 'react-router-dom'
import { render } from 'react-dom';
import StartPage from './views/StartPage/StartPage.js';
import RegisterPage from './views/RegisterPage/RegisterPage.js';
import Home from './views/Home/Home.js';
import Detail from './views/Detail/Detail.js';
import './App.css';
import Loggin from './components/Loggin/Loggin.js';

export default function App () {
  return (<Router>
    <Route exact path="/" component={StartPage} />
    <Route path="/register" component={RegisterPage} />
    <Route path="/detail" component={Detail} />
  </Router>
  );
};


