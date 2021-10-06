import { Component } from "react"
import { Container, Col, Image, Row } from "react-bootstrap"

export default class ExternalLinks extends Component {
    render() {
        return (
        <div className="background">
        <Container>
            <Row>
                <Col xs={6} md={4}>
                    <Image src={process.env.PUBLIC_URL + "/pics/facebookicon.png"} rounded />
                </Col>
                <Col xs={6} md={4}>
                    <Image src={process.env.PUBLIC_URL + "/pics/twittericon.png"} rounded/>
                </Col>
                <Col xs={6} md={4}>
                    <Image src={process.env.PUBLIC_URL + "/pics/youtubeicon.png"} thumbnail />
                </Col>
            </Row>
        </Container>
        </div>
    )
    }
}