import React from "react";
import {Component} from "react";
import AboutContent from "./AboutContent";
// import mikepic from './mike-pic.jpg'

export default class About extends Component {

    render() {
        return (<div className="background">
            <h2 className="headers"> About The Chef </h2>
       
            <AboutContent/>

        </div>
        )
    }
}