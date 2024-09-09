import { useEffect } from 'react';
import { Container, Navbar, Nav } from "react-bootstrap";
import './App.css'

export default function Header() {

    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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