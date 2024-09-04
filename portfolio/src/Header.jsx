import { Container, Navbar } from "react-bootstrap";

export default function Header() {
    return (
        <Navbar className="navbar" data-bs-theme='dark'>
        <Container fluid>
            <a href='#' className='navbar-brand'>
                Gabriele Massimiani | Portfolio
            </a>
            
            <a href='#login'className='btn btn-outline-light'>Login</a>
        </Container>
        </Navbar>
    );
}