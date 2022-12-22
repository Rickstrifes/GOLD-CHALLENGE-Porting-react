import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Navbar.css'



const Navigation = () => {
  return (
    <>
      {['sm'].map((expand) => (
        <Navbar key={expand} expand={expand} className=" background  fixed-top">
          <Container>
            <Navbar.Brand href="#" className='navbar-brand'></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className='fw-bolder p-3'>
                  BCR
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 mb-2 me-5 text-link-style fw-bold">
                  <Nav.Link href="#" className='active px-3 me-3'>Our Services</Nav.Link>
                  <Nav.Link href="#" className='active px-3 me-3'>Why Us</Nav.Link>
                  <Nav.Link href="#" className='active px-3 me-3'>Testimonial</Nav.Link>
                  <Nav.Link href="#" className='active px-3 me-3'>FAQ</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Navigation;