import React from "react";
import {Component} from "react";
import AboutContent from "./AboutContent";
import { Container, Image, Card } from "react-bootstrap";

export default class About extends Component {

    render() {
        return (
        <div id="about-background">
            <Container className="headers"> About The Chef </Container>
                <Card style={{ width: '18rem', backgroundColor: "cornsilk" }} id="about-card">
                    <Card.Title style={{ textAlign: "center", padding: 5, color: "darkolivegreen" }}>Mike Dudolevitch</Card.Title>
                        <Card.Img variant="top" src={process.env.PUBLIC_URL + "/pics/mikeweird.jpg"} />
                        <Card.Body>
                            
                            <Card.Text style={{ textAlign: "center", padding: 5, color: "darkolivegreen" }}>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                </Card>
                
            <Container className="content-div">
                <AboutContent />
            </Container>
        </div>
        )
    }
}