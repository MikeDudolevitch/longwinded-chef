import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route 
} from "react-router-dom"
import Home from './components/Home';
import Navigation from './components/Navigation'

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route exact path= "/" component={Home}/>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
