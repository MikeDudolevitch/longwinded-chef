import React from "react"
import {Component} from "react";
import {Navbar, Container, Nav} from 'react-bootstrap';


export default class Navigation extends Component {

    

    render(){
        return(
          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand href="/" id="nav-heading">Welcome To The Longwinded-Chef! Where Every Recipe Is A Life Story!</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="/" className="nav-options">Recipes</Nav.Link>
                    <Nav.Link href="/about" className="nav-options">About</Nav.Link>
                    <Nav.Link href="/links" className="nav-options">Links</Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
        )
      }
}