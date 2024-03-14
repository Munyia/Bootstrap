import { useState } from 'react'; // Importing useState hook for managing state
import Container from 'react-bootstrap/Container'; // Importing Container component from react-bootstrap for layout
import Nav from 'react-bootstrap/Nav'; // Importing Nav component from react-bootstrap for navigation
import Navbar from 'react-bootstrap/Navbar'; // Importing Navbar component from react-bootstrap for navigation bar
import NavDropdown from 'react-bootstrap/NavDropdown'; // Importing NavDropdown component from react-bootstrap for dropdown navigation
import Button from 'react-bootstrap/Button'; // Importing Button component from react-bootstrap for buttons
import Card from 'react-bootstrap/Card'; // Importing Card component from react-bootstrap for displaying cards

import './App.css'; // Importing custom CSS styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS styles

// Functional component representing the main App
function App() {
  // State hook to manage the count
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Navigation Bar */}
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          {/* Brand name */}
          <Navbar.Brand href="#home">Munyia Ranjo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* Navigation links */}
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              {/* Dropdown navigation */}
              <NavDropdown title="Search" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Details</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Profiles</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3"></NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Social Media</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            {/* Heading */}
            <h1>Welcome to My Website</h1>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Header Section */}
      <div id='header'>
        <div>
          {/* Services heading */}
          <h4 id='head'>Our Services</h4>
          {/* Contact heading */}
          <h4>Contact Us</h4>
        </div>
        <div id='ab'>
          {/* About heading */}
          <h4>About Us</h4>
          {/* About description */}
          <p>We are a team of passionate developers building amazing web applications.</p>
        </div>
      </div>

      {/* Cards Section */}
      <div id='pics'>
        {/* Card 1 */}
        <Card style={{ width: '20rem' }}>
          {/* Card image */}
          <Card.Img variant="top" src="res/rott.jpg" />
          <Card.Body>
            {/* Card title */}
            <Card.Title> Find out more about the Ranjo's....</Card.Title>
            {/* Card text */}
            <Card.Text>
              Wetin you plan to find
            </Card.Text>
            {/* Button */}
            <Button variant="primary">Abuja</Button>
          </Card.Body>
        </Card>
        {/* Card 2 */}
        <Card style={{ width: '20rem' }}>
          {/* Card image */}
          <Card.Img variant="top" src="res/lhasa.jpg" />
          <Card.Body>
            {/* Card title */}
            <Card.Title> Find out more about the Ranjo's....</Card.Title>
            {/* Card text */}
            <Card.Text>
              Wetin you plan to find
            </Card.Text>
            {/* Button */}
            <Button variant="primary">Abuja</Button>
          </Card.Body>
        </Card>
        {/* Card 3 */}
        <Card style={{ width: '20rem' }}>
          {/* Card image */}
          <Card.Img variant="top" src="res/cats.jpg" />
          <Card.Body>
            {/* Card title */}
            <Card.Title> Find out more about the Ranjo's....</Card.Title>
            {/* Card text */}
            <Card.Text>
              Wetin you plan to find
            </Card.Text>
            {/* Button */}
            <Button variant="primary">Abuja</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default App;
