import {BrowserRouter as Router, Route} from 'react-router-dom'
import StartPage from './views/StartPage/StartPage.js';
import RegisterPage from './views/RegisterPage/RegisterPage.js';
import Home from './views/Home/Home.js';
import Detail from './views/Detail/Detail.js';
import './App.css';

export default function App () {
  return (<Router>
    <Route exact path="/" component={StartPage} />
    <Route path="/register" component={RegisterPage} />
    <Route path="/detail" component={Detail} />
    <Route path="/home" component={Home} />
  </Router>
  );
};


