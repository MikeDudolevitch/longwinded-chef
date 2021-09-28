import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route 
} from "react-router-dom"
import Home from './components/Home';
import Navigation from './components/Navigation'
import About from './components/About';
import Footer from './components/Footer';
import {fetchRecipe} from './actions/recipes'
import { connect } from 'react-redux'

class App extends React.Component {
  render() {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          
          <Route exact path= "/" component={Home}/>
          <Route exact path= "/about" component={About}/>
        </Switch>
      <Footer />
      </div>
    </Router>
  );
} 
}

const mapStateToProps = (state) => {
  return {
    store: state.store
  }
}

export default connect(mapStateToProps, {fetchRecipe})(App)
