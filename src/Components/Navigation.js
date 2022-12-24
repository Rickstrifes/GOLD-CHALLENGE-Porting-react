import {Container, Nav, Navbar, Offcanvas} from 'react-bootstrap';
import './Navigation.css';
import React from 'react';
import { Fragment } from 'react';



const Navigation = () => {
  return (
    <Fragment>
      {['sm'].map((expand) => (
        <Navbar key={expand} expand={expand} className=" background  fixed-top">
          <Container>
            <Navbar.Brand className='navbar-brand'></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className='fw-bolder p-3'>
                  BCR
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 mb-2 me-5 text-link-style fw-bold">
                  <Nav.Link className="nav-link active nav-item px-3" href="#services">Our Services</Nav.Link>
                  <Nav.Link className="nav-link active nav-item px-3" href="#whyus">Why Us</Nav.Link>
                  <Nav.Link className="nav-link active nav-item px-3" href="#testi">Testimonial</Nav.Link>
                  <Nav.Link className="nav-link active nav-item px-3" href="#faq">FAQ</Nav.Link>
                  </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>  
        </Navbar>
      ))}
    </Fragment>
  );
}

export default Navigation;
