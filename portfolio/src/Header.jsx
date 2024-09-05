import { Container, Navbar, Nav } from "react-bootstrap";
import './App.css'

export default function Header() {
    return (
        <Navbar className="navbar" data-bs-theme='dark'>
        <Container>
            <a href='#' className='navbar-brand'>
                Gabriele Massimiani | Portfolio
            </a>
            
            <Nav className="ms-auto">
                    <Nav.Link href="#about" className="navlink">About</Nav.Link>
                    <Nav.Link href="#projects" className="navlink">Projects</Nav.Link>
                    <Nav.Link href="#contact" className="navlink">Contact</Nav.Link>
            </Nav>
        </Container>
        </Navbar>
    );
}