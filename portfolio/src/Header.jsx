import { useState, useEffect } from 'react';
import { Container, Navbar, Nav, Dropdown, Button, Collapse } from "react-bootstrap";
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css'; 

export default function Header(props) {

    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const {homePage} = props;
    const href = homePage ? '#' : '/Gabriele-Massimiani-Portfolio/';
    
    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector('.navbar');
            const collapse = document.querySelector('.navbar-collapse-fixed');

            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
                setScrolled(true);
                setOpen(false);
            } else {
                navbar.classList.remove('scrolled');
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return (
        <>
        <Navbar className="navbar" data-bs-theme='dark'>
        <Container>
            <a href={href} className='navbar-brand'>
                <img alt="Logo_GM" src="/Gabriele-Massimiani-Portfolio/assets/Logo_GM.svg" className="navbar-brand-logo"/>
            </a>
            <a href={href} className='navbar-brand d-none d-lg-block me-auto'>
                Gabriele Massimiani | Portfolio
            </a>
            {homePage && 
            <>
                <Nav className="ms-auto d-none d-lg-flex">
                    <Nav.Link href="#projects" className="navlink">Projects</Nav.Link>
                    <Nav.Link href="#contact" className="navlink">Contact</Nav.Link>
                    <Nav.Link href="/Gabriele-Massimiani-Portfolio/assets/CV GABRIELE MASSIMIANI.pdf" className="navlink">Resume</Nav.Link>
                </Nav>

                <Button
                        className="d-lg-none button-collapse"
                        variant=''
                        onClick={() => setOpen(!open)}
                        aria-controls="navbar-collapse"
                        aria-expanded={open}
                    >
                        <i className="bi bi-list"></i>
                    </Button>
            </>
            }
            
        </Container>
        </Navbar>
        {homePage &&
            <Collapse in={open} className={`navbar-collapse-fixed ${scrolled ? 'scrolled' : ''}`}>
                <div id="navbar-collapse" >
                    <Nav className="flex-column">
                        <Nav.Link href="#projects" className="navlink">Projects</Nav.Link>
                        <Nav.Link href="#contact" className="navlink">Contact</Nav.Link>
                        <Nav.Link href="/Gabriele-Massimiani-Portfolio/assets/CV GABRIELE MASSIMIANI.pdf" className="navlink">Resume</Nav.Link>
                    </Nav>
                </div>
            </Collapse>
        }
        </>
    );
}