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
import { useDispatch } from 'react-redux'
import { setRecipes } from './redux/recipeReducer'

function App() {

  const dispatch = useDispatch() 

  useEffect(() => {
    dispatch(setRecipes())

  }, [])

  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route exact path= "/" component={Home}/>
          <Route exact path= "/about" component={About}/>
          <Route exact path="/recipes/:id" />

        </Switch>
      <Footer />
      </div>
    </Router>
  );
} 

// render={(props) => <Info {...props} recipes={this.props.recipes} />


export default App
