import React from "react";
import {Component} from "react";
import AboutContent from "./AboutContent";
import { Container, Image } from "react-bootstrap";

export default class About extends Component {

    render() {
        return (
        <div className="background">
            <Container className="headers"> About The Chef </Container>
                <Image src={process.env.PUBLIC_URL + "/mikeweird.jpg"} width="300" position="center" alt="chef"/>
            <Container className="content-div">
                <AboutContent />
            </Container>
        </div>
        )
    }
}