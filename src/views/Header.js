import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar expand='lg' bg='primary' variant="dark" className='mt-4 mb-4 rounded'>
      <Container>
        <Navbar.Brand>Waiter.app</Navbar.Brand>
        <Nav className='me-auto, justify-content-end'>
          <Nav.Link as={NavLink} to="/">Home</Nav.Link>
          <Nav.Link as={NavLink} to="/add">Add Table</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header;