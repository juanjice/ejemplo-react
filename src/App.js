import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
function App() {
  return (
    <div className="App">
    <div>Esto es estatico</div>
    <Router>
      <Switch> 
      <Route path="/" exact component={Home}>  
      </Route> 
      <Route path="/login" component={Login}>  
      </Route>   
      <Route path="/register" component={Register}>  
      </Route>          
      </Switch>    
    </Router>
    </div>
  );
}

export default App;
