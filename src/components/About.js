import React from "react";
import {Component} from "react";
import AboutContent from "./AboutContent";
import { Container, Card } from "react-bootstrap";

export default class About extends Component {

    render() {
        return (
        <div id="about-background">
            <Container style={{ fontSize: "5vh", fontWeight: "bolder", textShadow: "5px 5px black", textAlign: "center", color: "cornsilk"}}> About The Chef </Container>
                <Card style={{ width: '18rem', backgroundColor: "cornsilk", margin: "auto", marginRight: "10vw"}}>
                    <Card.Title style={{ textAlign: "center", padding: 5, color: "darkolivegreen" }}>Mike Dudolevitch</Card.Title>
                        <Card.Img variant="top" src={process.env.PUBLIC_URL + "/pics/mikeweird.jpg"} />
                        <Card.Body>
                            <Card.Text style={{ textAlign: "center", marginRight: 20, color: "darkolivegreen" }}>
                                The Longwinded Chef is a Michelin Star rated chef who got started working at a Dairy Queen in the greater Toledo, OH, area at age 14. He worked his way up to be assistant manager and then started this blog.
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