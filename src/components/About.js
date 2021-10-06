import React from "react";
import {Component} from "react";
import AboutContent from "./AboutContent";
import { Container, Image } from "react-bootstrap";

export default class About extends Component {

    render() {
        return (
        <div className="background">
            <Container className="headers"> About The Chef </Container>
                <Image src="https://www.istockphoto.com/photo/mallard-duck-on-white-background-gm464988959-32998174"/>
            <Container className="content-div">
                <AboutContent />
            </Container>
        </div>
        )
    }
}