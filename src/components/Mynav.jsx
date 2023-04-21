import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Mynav() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <div className='container'>
      <Navbar
        bg="black"
        variant="dark"
        expand="lg"
        style={{ position: 'sticky', top: 0, zIndex: 1000 }}
      >
        <Container>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="ml-auto"
            onClick={handleToggle}
            style={{ borderBottom: '1px solid white' }}
          />

          <Navbar.Collapse id="basic-navbar-nav" in={expanded}>
            <Nav className="flex-grow-1">
              <Nav.Link
                href="#Home"
                style={{ color: 'white', marginRight: '10px' }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#AboutUs"
                style={{ color: 'white', marginRight: '10px' }}
              >
                About Us
              </Nav.Link>
              <Nav.Link
                href="#Services"
                style={{ color: 'white', marginRight: '10px' }}
              >
                Services
              </Nav.Link>
              <Nav.Link
                href="#Technology"
                style={{ color: 'white', marginRight: '10px' }}
              >
                Technology
              </Nav.Link>
              <Nav.Link
                href="#Careers"
                style={{ color: 'white', marginRight: '10px' }}
              >
                Careers
              </Nav.Link>
              <Nav.Link
                href="#Blogs"
                style={{ color: 'white', marginRight: '10px' }}
              >
                Blogs
              </Nav.Link>
              <Nav.Link
                href="#OurWorks"
                style={{ color: 'white', marginRight: '10px' }}
              >
                Our Works
              </Nav.Link>
              <Nav.Link
                href="#Contactus"
                style={{ color: 'white', marginRight: '10px' }}
              >
                Contact us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Mynav;
