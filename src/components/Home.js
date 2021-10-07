import React from "react"
import {Component} from "react"
import Recipes from './Recipes'

export default class Home extends Component {
    
    render () {
        return (
            <div className="background">
                <h1 className="headers"> Select a Recipe! </h1>
                <Recipes />
            </div>
        ) } 
}

