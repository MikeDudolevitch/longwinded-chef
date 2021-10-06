import React from "react";
import {Component} from "react";
import AboutContent from "./AboutContent";
import { Container, Image } from "react-bootstrap";

export default class About extends Component {

    render() {
        return (
        <Container className="background">
            <h2 className="headers"> About The Chef </h2>
            <Image src="https://www.istockphoto.com/photo/mallard-duck-on-white-background-gm464988959-32998174"/>
            <AboutContent/>

        </Container>
        )
    }
}