import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Munyia Ranjo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <NavDropdown title="Search" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Details</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Profiles
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Social Media
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <div id='pics'>
      <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="res/rott.jpg" />
      <Card.Body>
        <Card.Title> Find out more about the Ranjo's....</Card.Title>
        <Card.Text>
        Wetin you plan to find
        </Card.Text>
        <Button variant="primary">Abuja</Button>
      </Card.Body>
    </Card>
      <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="res/lhasa.jpg" />
      <Card.Body>
        <Card.Title> Find out more about the Ranjo's....</Card.Title>
        <Card.Text>
        Wetin you plan to find
        </Card.Text>
        <Button variant="primary">Abuja</Button>
      </Card.Body>
    </Card>
      <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="res/cats.jpg" />
      <Card.Body>
        <Card.Title> Find out more about the Ranjo's....</Card.Title>
        <Card.Text>
        Wetin you plan to find
        </Card.Text>
        <Button variant="primary">Abuja</Button>
      </Card.Body>
    </Card>
      </div>
      
    </>
  )
}

export default App
