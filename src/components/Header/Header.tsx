import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useNavigate} from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    return(
        <>
            <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand onClick={() => navigate ('/')}>EspiSport</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate ('/')}>Inicio</Nav.Link>
            <Nav.Link onClick={() => navigate ('/componentes')}>Componentes</Nav.Link>
            <Nav.Link onClick={() => navigate ('/administracion')}>Administración</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </>    
        
    )
}

export default Header;
