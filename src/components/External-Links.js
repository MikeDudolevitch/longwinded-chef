import { Component } from "react"
import { Container, Col, Image, Row } from "react-bootstrap"

export default class ExternalLinks extends Component {
    render() {
        return (
        <div className="background">
        <Container>
            <Row>
                <Col xs={6} md={4}>
                    <Image src={".././public/logo192.png"} rounded />
                </Col>
                <Col xs={6} md={4}>
                    <Image src="holder.js/171x180" roundedCircle />
                </Col>
                <Col xs={6} md={4}>
                    <Image src="holder.js/171x180" thumbnail />
                </Col>
            </Row>
        </Container>
        </div>
    )
    }
}