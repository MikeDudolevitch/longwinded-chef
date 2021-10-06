import './App.css';
import React, {useEffect} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route 
} from "react-router-dom"
import Home from './components/Home';
import Navigation from './components/Navigation'
import About from './components/About';
import Footer from './components/Footer';
import { useDispatch, connect } from 'react-redux'
import { fetchRecipes } from './actions/recipe';
import RecipeInfo from './components/RecipeInfo';

class App extends React.Component {
  
  componentDidMount() {
    this.props.fetchRecipes()
  }

  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <Switch>
            <Route exact path= "/" component={Home}/>
            <Route exact path= "/about" component={About}/>
            <Route exact path="/recipes/:id" 
            render={(props) => <RecipeInfo {...props} recipe={this.props.recipe}/>}/>
  
          </Switch>
        <Footer />
        </div>
      </Router>
    );
  }
}
  

const mapStateToProps = state => {
  return {
    recipe: state.recipe
  }
}

export default connect(mapStateToProps, {fetchRecipes})(App)